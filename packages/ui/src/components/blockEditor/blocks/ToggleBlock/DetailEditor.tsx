import { FloatLabelTextarea } from '../FloatLabelTextarea'

export type DetailEditorProps = {
  id: string
  value: string
}

export const DetailEditor = ({ id, value }: DetailEditorProps) => {
  return <FloatLabelTextarea id={id} label='detail' value={value} />
}
