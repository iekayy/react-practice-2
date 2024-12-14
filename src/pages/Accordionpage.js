import Accordion from "../components/Accordion";
function AccordionPage(){
    const items = [
        {   id: 'kjdhfg',
            label: 'Can I use React',
            content: 'Of course bro'

        },

        {   id: 'klfkg',
            label: 'Can i use js',
            content: 'Yea bro'

        },
        {   id: 'hfhdjh',
            label: 'Can i use node',
            content: 'why not bro'

        }

    ];

    
       return <Accordion items = {items}/>;
    
}

export default AccordionPage;