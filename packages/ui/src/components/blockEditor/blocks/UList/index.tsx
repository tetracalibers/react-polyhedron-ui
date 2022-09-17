import styled from 'styled-components'
import { IconOnly } from '../../../core/IconOnly'
import { editInputStyle } from '../../styled/editInput'
import { GroupPanel } from '../GroupPanel'
import { ResetCss } from 'styled-utility-first'
import { TbCodePlus } from 'react-icons/tb'

const Ul = styled.ul`
  padding-left: 1rem;
`

const Li = styled.li`
  padding-left: 0.5rem;
`

const Input = styled.input`
  ${editInputStyle}

  background-color: rgba(255,255,255,0.4);
  box-shadow: none;

  width: 100%;
  padding: 1rem;
`

const AddSeparator = styled(IconOnly.Button)`
  ${ResetCss.button}

  --color: rgb(96,125,139);
  --gap: 0.5rem;
  --icon-size: 2rem;

  margin-top: 1rem;
  color: var(--color);
  display: flex;
  align-items: center;
  width: 100%;

  & svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px dashed var(--color);
  }

  &::before {
    margin-right: var(--gap);
  }

  &::after {
    margin-left: var(--gap);
  }
`

export type UListBlockProps = {
  id: string
}

export const UListBlock = ({ id }: UListBlockProps) => {
  return (
    <GroupPanel>
      <Ul>
        <Li>
          <Input />
        </Li>
      </Ul>
      <AddSeparator icon={<TbCodePlus />} label='add list item' />
    </GroupPanel>
  )
}
