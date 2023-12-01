import { Button, Form, FormGroup } from 'react-bootstrap';
import React, { FC, useCallback, useState } from "react";
import { IAddPost, IInputData } from "../../types";
import moment from 'moment';
import axiosApi from '../../axiosApi.ts';
import { useNavigate } from "react-router-dom";

const AddPost:FC<IAddPost> = ({loadNewPost}) => {
  const initialInputData: IInputData = {
    title: '',
    date: '',
    text: '',
  };

  const [inputData, setInputData] = useState<IInputData>(initialInputData);
  const navigate = useNavigate()

  const inputDataChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }, []);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    const convertedDate = moment(date).format('MMM Do YY, h:mm:ss');
    setInputData((prevState) => ({ ...prevState, date: convertedDate }));
      try {
        await axiosApi.post('/posts.json', {...inputData, date: convertedDate});
        loadNewPost()
        navigate('/')
      } catch (error) {
        console.log('Caught while sending post to DB: ' + error);
      } finally {
        setInputData(initialInputData);
      }
  };

  return (
    <section className="border border-1 rounded rounded-3 shadow-sm py-3 px-3">
      <h2 className="mb-3">Add post</h2>
      <Form onSubmit={submitHandler}>
        <FormGroup className="mb-3 d-flex flex-wrap">
          <Form.Label className="w-100" htmlFor="title">
            Title
          </Form.Label>
          <Form.Control
            onChange={inputDataChanged}
            className="w-50 me-auto"
            type="text"
            name="title"
            id="title"
            value={inputData.title}
            required
          />
          <Button className="me-auto" type="submit" variant="primary">
            Submit
          </Button>
        </FormGroup>
        <FormGroup>
          <Form.Label htmlFor="text">Text</Form.Label>
          <Form.Control
            onChange={inputDataChanged}
            as="textarea"
            name="text"
            id="text"
            rows={12}
            value={inputData.text}
            required
          />
        </FormGroup>
      </Form>
    </section>
  );
};

export default AddPost;
