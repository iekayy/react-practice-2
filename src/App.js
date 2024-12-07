import {GoBell} from 'react-icons/go';
import Button from "./Button";
function App(){
    return <div>
        <div>
            
            <Button success outline rounded>
                <GoBell/>
                Click Me
                </Button>
            </div>
        <div>
            <Button danger outline>Buy Me</Button>
            </div>
        <div>
            <Button warning>Tap here</Button>
            </div>
        <div>
            <Button secondary outline>Try this!!</Button>
            </div>
        <div>
            <Button primary rounded>See Deal!!</Button>
            </div>





    </div>
}

export default App;