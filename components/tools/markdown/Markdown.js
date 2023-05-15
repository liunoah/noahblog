// import Android from './Android'
import Web from './Web'
import { Platform } from 'react-native';
// const isWeb = Platform.OS === 'web';

function MyComponent(props) {

  return (
    <Web markdown = {props.markdown} />
    // <Android markdown = {props.markdown} />
  );
}
export default MyComponent