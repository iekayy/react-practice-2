import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';
import Button from "../components/Button";
function ButtonPage(){

    const handleClick = ()=>{
        console.log('Click');

    };
    return <div>
        <div>
            
            <Button onClick ={handleClick} success outline rounded>
                <GoBell/>
                Click Me
                </Button>
            </div>
        <div>
            <Button danger outline><GoCloudDownload/>Buy Me</Button>
            </div>
        <div>
            <Button warning><GoDatabase/>Tap here</Button>
            </div>
        <div>
            <Button secondary outline>Try this!!</Button>
            </div>
        <div>
            <Button primary rounded>See Deal!!</Button>
            </div>





    </div>
}

export default ButtonPage;