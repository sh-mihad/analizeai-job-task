import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useState } from 'react';


const Accordian = ({data}) => {

//    console.log(data);

    const [buttonToggle,setButtonToggle]= useState(true)

//    console.log(buttonToggle);
    return (
        <div className="my-5">
            <Accordion>
                <AccordionSummary
                    // expandIcon={<Button variant="contained">Contained</Button>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                
                   <div className="flex justify-between w-full">
                   <div className="grid grid-cols-3 gap-6 w-full">
                    <Typography>
                        <div className="font-semibold">Name</div>
                        <div className="mt-3">
                            <p >{data?.name}</p>
                        </div>
                    </Typography>
                    <Typography>
                    <div className="font-semibold">Contact</div>
                    <div className="mt-3">
                            <p>{data?.email}</p>
                        </div>
                    </Typography>
                    <Typography>
                    <div className="font-semibold">City</div>
                    <div className="mt-3">
                            <p>{data?.address?.city}</p>
                        </div>
                    </Typography>
    
                    </div>
                   <div>
                   {
                    buttonToggle?  <Button onClick={()=>setButtonToggle(false)} variant="contained" className="h-10 w-36 text-sm"><small>View Details</small></Button>
                    :
                    <Button onClick={()=>setButtonToggle(true)} variant="outlined" className="h-10 w-36 text-sm "><small>Hide Details</small></Button>
                   }
                   </div>
                   </div>
                    
                 
                </AccordionSummary>
             
                <AccordionDetails>
                   <div className="p-6  mx-auto border ">
                      <div>
                      <h5 className="text-xl font-semibold">Description</h5>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quaerat veniam, voluptatibus quidem asperiores eum hic vero. Cupiditate, tenetur accusamus minus atque nostrum, totam alias, eius ipsam reprehenderit ut obcaecati?</p>

                      </div>

                    {/* code for personal information with 2 section */}
                      <div className="grid grid-cols-2 my-6">
                        <div>
                            <div>
                                <div>
                                    <h5 className="text-sm font-semibold">Conatact Person</h5>
                                    <small>{data?.name}</small>
                                </div>
                                <div>
                                <h5 className="text-sm font-semibold">Emails</h5>
                                <small>{data?.email}</small>
                                </div>
                                <div>
                                <h5 className="text-sm font-semibold">Website</h5>
                                <small>{data?.website}</small>
                                </div>
                            </div>
                           
                        </div>
                        <div>
                                <div>
                                    <h5 className="text-sm font-semibold">Adress</h5>
                                    <small>{data?.address?.street}</small>
                                </div>
                                <div>   
                                <h5 className="text-sm font-semibold">City</h5>
                                <small>{data?.address?.city}</small>
                                </div>
                                <div>
                                <h5 className="text-sm font-semibold">Zip Code</h5>
                                <small>{data?.address?.zipcode}</small>
                                </div>
                            </div>
                      </div>
                   </div>
                  
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Accordian;