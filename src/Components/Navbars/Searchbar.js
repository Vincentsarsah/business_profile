import React from 'react'
import { Button, Navbar,FormControl,Form} from 'react-bootstrap'
import '../Css/Style.css'

function Searchbar() {
    return (
<       div>
            <Navbar className="bg-light justify-content-between">
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2 search_bar" />
                <Button type="submit" className = "search_button">Search</Button>
            </Form>
            </Navbar>
        </ div>
    )  
  }

  export default Searchbar