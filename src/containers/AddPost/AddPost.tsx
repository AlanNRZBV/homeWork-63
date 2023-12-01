import { Button, Form, FormGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import { IInputData, IPostsItem } from '../../types';
import moment from 'moment'

const AddPost = () => {

  const [inputData, setInputData] = useState<IInputData>({
    title: '',
    date: '',
    text: '',
  });


  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setInputData(prevState => ({...prevState, [e.target.name]: e.target.value}))
    console.log(inputData)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const date = new Date();
    const convertedDate = moment(date).format("MMM Do YY")
    setInputData(prevState => ({...prevState, date: convertedDate}))
  }

  return (
    <section className="border border-1 rounded rounded-3 shadow-sm py-3 px-3">
      <h2 className="mb-3">Add post</h2>
      <Form onSubmit={submitHandler}>
        <FormGroup className="mb-3 d-flex flex-wrap">
          <Form.Label className="w-100" htmlFor="title">
            Title
          </Form.Label>
          <Form.Control onChange={changeHandler} className="w-50 me-auto" type="text" name="title" id="title" value={inputData.title} required/>
          <Button className="me-auto" type="submit" variant="primary">
            Submit
          </Button>
        </FormGroup>
        <FormGroup>
          <Form.Label htmlFor="text">Text</Form.Label>
          <Form.Control onChange={changeHandler} as="textarea" name="text" id="text" rows={12} value={inputData.text} required/>
        </FormGroup>
      </Form>
    </section>
  );
};

export default AddPost;
