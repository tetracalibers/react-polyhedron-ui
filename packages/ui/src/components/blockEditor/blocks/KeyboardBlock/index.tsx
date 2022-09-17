import styled from 'styled-components'
import { IconOnly } from '../../../core/IconOnly'
import { ResetCss } from 'styled-utility-first'
import { BsPlusSquareDotted } from 'react-icons/bs'
import { editInputStyle } from '../../styled/editInput'
import { GroupPanel } from '../GroupPanel'
import _ from 'lodash'
import { useAddmore } from '../reducer/useAddmore'

const Panel = styled(GroupPanel)`
  display: flex;
  gap: 1em;
  align-items: center;
`

const AddButton = styled(IconOnly.Button)`
  ${ResetCss.button}
  color: rgb(96, 125, 139);

  & svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

const InlineInput = styled.input`
  ${editInputStyle}
  padding: 0.5em;

  /* 文字数に合わせて伸縮 */
  min-width: 2em;
  text-align: center;
  box-sizing: content-box;
  width: ${({ value }) => (value as string)?.length ?? 2}ch;
`

type KeyBoardBlockProps = {
  id: string
}

export const KeyboardBlock = ({ id }: KeyBoardBlockProps) => {
  const { items, addFn, updateFn } = useAddmore(id)

  return (
    <Panel>
      {items.map((keyName, idx) => (
        <InlineInput
          value={keyName}
          key={`${id}_${idx}`}
          onChange={e => updateFn(e, idx)}
        />
      ))}
      <AddButton
        icon={<BsPlusSquareDotted />}
        label='add keyboard name'
        onClick={addFn}
      />
    </Panel>
  )
}
