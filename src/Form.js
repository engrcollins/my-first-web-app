import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function MyForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = newData => {
    //alert(JSON.stringify(data,  null, 4));
    newData = (JSON.stringify(newData));
    console.log(JSON.stringify(newData, null, 4))
    axios.post('https://github.com/engrcollins/web-journal/tableEntries', {newData}, {headers:{'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',"}})
    .then(response => {
      console.log(response);
       console.log(response.data);
       //window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
    })
   /* let data = JSON.stringify({
      username: this.state.username,
      password: password
    });
    
    const response = axios.post(url,data,{headers:{"Content-Type" : "application/json"}});*/
  
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="labelling" htmlFor="articleTitle">Article Title</label>
          <input name="articleTitle" placeholder="Article Title goes here" ref={register} />
        </div>

        <div>
          <label className="labelling" htmlFor="category">Category</label>
          <input name="category" placeholder="Article Category goes here" ref={register} />
        </div>

        <div>
          <label className="labelling" htmlFor="content">Content</label>
          <input name="content" placeholder="Article Contents goes here" ref={register} />
        </div>

        <div>
          <label className="labelling" htmlFor="source">Source</label>
          <input name="source" placeholder="Article Source goes here" ref={register} />
        </div>

        <div>
          <label className="labelling" htmlFor="sourceUrl">Source URL</label>
          <input name="sourceUrl" placeholder="Source URL goes here" ref={register} />
        </div>

        <div>
          <label className="labelling" htmlFor="author">Author</label>
          <input name="author" placeholder="Article Original Author goes here" ref={register} />
        </div>

        <div>
          <label className="labelling" htmlFor="tags">Tags</label>
          <input name="tags" placeholder="tags go here" ref={register} />
        </div>
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default MyForm
