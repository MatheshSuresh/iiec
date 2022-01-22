import {useEffect, useState} from 'react';
import {Draggable} from "react-beautiful-dnd";
import {LoremIpsum} from "lorem-ipsum";
import {generateFromString} from "generate-avatar";
import React, {useMemo} from "react";
import styled, {css} from "styled-components";
import axios from 'axios';

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border: 3px solid white;
  border-radius: 50%;
`;

const CardHeader = styled.div`
  font-weight: 500;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

const lorem = new LoremIpsum();

const ListItem = ({item, index}) => {

  const [leadData, setLeadData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('http://localhost:5000/api/lead')
      // leadData(data);
    }
    fetchData();
  }, [])


  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardHeader>Name: {item.data.firstName} {item.data.lastName}</CardHeader>
            <CardHeader>Email: {item.data.email}</CardHeader>
            <CardHeader>Phone Number: {item.data.phoneNo}</CardHeader>
            <CardHeader>Preferred Study Destination: {item.data.preferDestination}</CardHeader>
            <CardHeader>Preference of Study Time: {item.data.startDate}</CardHeader>
            <CardHeader>Preferred Office Location: {item.data.officeLocation}</CardHeader>
            <CardHeader>Preferred Counsel Medium: {item.data.preferCounsel}</CardHeader>
            <CardHeader> Study Level: {item.data.studyLevel}</CardHeader>
            <CardHeader> Fund Option: {item.data.fundOption}</CardHeader>
            <CardFooter>
              {/* <span>{item.content}</span> */}
              <Author>
                <Avatar
                  src={`data:image/svg+xml;utf8,${generateFromString(item.id)}`}
                />
              </Author>
            </CardFooter>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
