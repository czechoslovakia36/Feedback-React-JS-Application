import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback,setFeedback]= useState([
        {
            id:1,
            text:"this is feedback item 1",
            rating :10
        },
        {
            id:2,
            text:"this is feedback item 2",
            rating :5
        },
        {
            id:3,
            text:"this is feedback item 3",
            rating :3
        }
    ])

     const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
     })

// Set item to be updated

     const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
     }
// Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure want to delete?'))
        {
            const narr = (feedback.filter((item => item.id !== id)))
            setFeedback(narr);
            console.log(narr);
        }    
        
     }

     const addFeedback = (newFeedback) => {
        newFeedback.id= uuidv4()
        setFeedback([newFeedback,...feedback])
        console.log(newFeedback)
     }
    


    return <FeedbackContext.Provider value={
        {
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit
        }
    }>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext