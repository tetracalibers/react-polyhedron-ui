import _ from 'lodash'
import { system } from 'styled-system'

export const mixinBuilder = <Props, Conf>(conf: Conf) => {
  const result = Object.entries(conf).reduce((prev, entry) => {
    const [propertyName] = entry
    return {
      ...prev,
      [propertyName]: true,
    }
  }, {} as { [pname in keyof Props]: (props: Props) => string })
  return system(result)
}
