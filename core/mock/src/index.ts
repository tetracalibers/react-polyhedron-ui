import StylingFile from './class/StylingFile'
import ComponentFile from './class/ComponentFile'

const path = 'src/components/atoms/Balloon/index.tsx'
const tsxFile = new ComponentFile(path)
const tree = new StylingFile(
  tsxFile.getStylingFilePath(),
  tsxFile.getJsx()
).dumpJson()

const obj = {
  backgroundColor: '#1a1a1a',
  borderRadius: '2px',
  color: 'white',
  display: 'inline-block',
  fontSize: '0.8rem',
  padding: '0.4rem 0.5rem',
  position: 'relative',
  __after: {
    borderColor: '#1a1a1a transparent transparent transparent',
    borderStyle: 'solid',
    borderWidth: '3px 3px 0 3px',
    bottom: '0',
    content: '',
    display: 'block',
    height: '0',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, 100%)',
    width: '0',
  },
}

//console.log(JSON.stringify(obj))
