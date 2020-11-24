*********************************
this anmimation works perfectly when font size scales to 3rem
@keyframes scroll-first {
    0% { 
        transform: translateY(0%); 
      
    }

    17% { 
        transform: translateY(0%);
        
    }

    20% {
        transform: translateY(-60px);
    }


    37% { 
        transform: translateY(-60px);
        
    }

    40% {
        transform: translateY(-143px);
    }

    57% { 
        transform: translateY(-143px); 
    }

    60% { 
        transform: translateY(-200px); 
       
    }

    77% { 
        transform: translateY(-200px); 
       
    }

    80% { 
        transform: translateY(-267px); 
    }

    
    99% { 
        transform: translateY(-267px); 
        
    }

    100% {
        transform: translateY(0%);         
    }
}
**************************************************************************************************************************************8888
works for a fs of 2.5rem
@keyframes scroll-first {
    0% { 
        transform: translateY(0%); 
      
    }

    17% { 
        transform: translateY(0%);
        
    }

    20% {
        transform: translateY(-60px);
    }


    37% { 
        transform: translateY(-60px);
        
    }

    40% {
        transform: translateY(-120px);
    }

    57% { 
        transform: translateY(-120px); 
    }

    60% { 
        transform: translateY(-180px); 
       
    }

    77% { 
        transform: translateY(-180px); 
       
    }

    80% { 
        transform: translateY(-240px); 
    }

    
    99% { 
        transform: translateY(-240px); 
        
    }

    100% {
        transform: translateY(0%);         
    }
}

*************
ADDED THIS LINE

*********************************************************************8
WORKING FOR SEARCH FULL SCREEN
#jobRole {
            display: flex;
            width: 100%;
            //flex-direction: column;
            //border: 2px solid green;

            form {
                display: flex;
                width: 100%;
                //border: slateblue 2px solid;

                #connector {
                    width: 10% !important;

                    ::placeholder {
                        text-align: center;
                    }
                }
                #sub_div {
                    width: 10% !important;
                    border: 1px solid rgb(223, 222, 222);
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                    text-align: center;
                    
                    input[type = submit] {
                        cursor: pointer;
                        background-color: white;
                        border: none;
                        padding: 15px 0;
                        
                    }
                }

                div {
                    width: 40%;
                    //border: 2px solid red;

                    input[type = text] {
                        padding: 15px 0px;
                        width: 100%;
                        border: 1px solid rgb(223, 222, 222);
                    }

                    input[type=text]:focus {
                        border: 3px solid #555;
                      }
                }