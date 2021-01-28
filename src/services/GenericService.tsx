import { useState, useEffect } from 'react';
import axios from 'axios';

const HEADERS = { "Content-Type": "application/json" };

function GetAll<T>(api_url: string): T[] {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    axios.get<T[]>(api_url, {
        headers: HEADERS
      })
      .then(response => {
        setData(response.data);
      });    
  }, [api_url]);
  return data;
}

function GetById<T>(api_url: string, id: number) : T {
  const [data, setData] = useState<T>();
  
  useEffect(() => {
    axios.get<T>(`${api_url}/${id}`, {
        headers: HEADERS
    })
    .then(response => {
        setData(response.data);
    });
  }, [api_url, id]);

  return data;
}

function Create<T>(api_url: string, data:T) {
  return axios.post(api_url, data);
}

function Update<T>(api_url: string, data: T) {
  return axios.put(`${api_url}/${data?.id}`, data );
}

function Remove(api_url: string, id: number) {
  return axios.delete(`${api_url}/${id}`);
}

export {
  GetAll,
  GetById,
  Create,
  Update,
  Remove
}