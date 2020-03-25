import React from 'react';

import './style.css';

function Reaction() {
    return(
        <div className="reaction">
             <div className="divider"/>
             <div className="reactions"> 
             <div className="react">
                 <button>
                    Curtir
                </button>
                 <button>Comentar</button>              
                 <button>Compartilhar</button> 
                </div>                            
           </div>
        </div>
    );   
}
export default Reaction;
