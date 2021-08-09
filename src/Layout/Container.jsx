import React from 'react' 
const Container = (props) => {
    return (
        <React.Fragment> 
        <div className={`${props.className}`}> 
                {props.children} 
        </div>
     
        </React.Fragment>
    )
}

export default Container
