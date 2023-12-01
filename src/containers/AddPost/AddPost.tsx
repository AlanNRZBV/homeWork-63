import { Button, Form, FormGroup } from 'react-bootstrap';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { IAddPost, IInputData } from '../../types';
import moment from 'moment';
import axiosApi from '../../axiosApi.ts';
import { useNavigate } from 'react-router-dom';

const AddPost: FC<IAddPost> = ({ loadNewPost, editId }) => {
  const [inputData, setInputData] = useState<IInputData>({
    title: '',
    date: '',
    text: '',
  });
  const [isEdited, setIsEdited] = useState(false);
  const navigate = useNavigate();
  const inputDataChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }, []);

  useEffect(() => {
    if (editId !== '') {
      const fetchSinglePost = async () => {
        await axiosApi.get(`/posts/${editId}.json`).then((response) => {
          console.log(response.data);
          setInputData((prevState) => ({ ...prevState, title: response.data.title, text: response.data.text }));
          setIsEdited(true);
        });
      };
      void fetchSinglePost();
    }
  }, [editId]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    const convertedDate = moment(date).format('MMM Do YY, h:mm:ss');
    setInputData((prevState) => ({ ...prevState, date: convertedDate }));
    try {
      if (!isEdited) {
        await axiosApi.post('/posts.json', { ...inputData, date: convertedDate });
      } else {
        await axiosApi.put(`/posts/${editId}.json`, { ...inputData, date: convertedDate });
      }
      if (loadNewPost) {
        loadNewPost();
      }
      setInputData((prevState) => ({ ...prevState, title: '', date: '', text: '' }));
      navigate('/');
    } catch (error) {
      console.log('Caught while sending post to DB: ' + error);
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
