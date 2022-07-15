import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Addpost from "./Addpost";

const Timeline = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const titleRef = useRef()
    const contentRef = useRef()
    
        const togglePopup = () => {
            setIsOpen(!isOpen)
        }

    async function handleSubmit(event) {
        try{
            setLoading(true)
            event.preventDefault();
            navigate("/timeline")
        }
        catch(error){
            setLoading(false)
            setError(error.message)
            console.log(error.messages)
        }
    }
    return ( 
        <div className="timeline">
            <h1>This is the timeline</h1>
            <div className="timeline-post">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="timeline-buttons">
                <button className="add-post" onClick={togglePopup}>Add a new post</button>
                {isOpen && <Addpost handleClose={togglePopup} content = {<>
                    <form onSubmit={handleSubmit}>
                        <h1>Post Something</h1>
                        <lable>Title</lable>
                        <input type='text' placeholder='Title' ref={titleRef}></input>
                
                        <lable>Content</lable>
                        <input type='text' placeholder='Content'ref ={contentRef}></input>
                        <button type='submit'>Post</button>
                    </form>
                </>}
                />}
                    
            </div>

        </div>
     );
}
 
export default Timeline;