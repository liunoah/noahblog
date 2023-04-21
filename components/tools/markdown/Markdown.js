import Android from './Android'
import Web from './Web'
import { Platform } from 'react-native';
const isWeb = Platform.OS === 'web';

function MyComponent(props) {
  // const markdown = '# Hello, world!\n\nThis is **markdown**.';
  return (
    isWeb ? 
    <Web markdown = {props.markdown} />:
    <Android markdown = {props.markdown} />
  );
}
export default MyComponent