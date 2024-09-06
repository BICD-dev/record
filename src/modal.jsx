import { useState } from "react";

const ModalBox = ({Id, handleEdit, setModalOpen, currentContent, currentTitle}) => {
  const [content, setContent] = useState(currentContent)
  const [ title, setTitle] = useState(currentTitle)
  
  return (
    <div className="modal">
      <div className="flex">
        <div className="just-there">
          <form className="form">
            <h1 style={{
              fontSize:"2rem"
            }}>Edit record</h1>
            <input type="text" id="title" placeholder="Title" 
            value={title}
            onChange={(event)=>{
                setTitle(event.target.value)
              }
            } />
            <input
              type="text"
              name="content"
              id="content"
              value={content}
              placeholder="Content"
              onChange={(event)=>{
                setContent(event.target.value)
              }}
            />
            <button
              className="edit"
              onClick={(event) => {
                event.preventDefault()
                handleEdit(Id,title,content);
                setModalOpen(false)
              }}
            >
              edit record
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
