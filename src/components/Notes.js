import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import styled from "@emotion/styled";

import Note from "./Note";
import { listNotes } from "../graphql/queries";
import { updateNote, deleteNote } from "../graphql/mutations";


import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  FirstName: t.String,
  LastName: t.String,
  BirthDate: t.Date,
  FavoriteIceCream: t.String
});

const Container = styled("div")`
  max-width: 800px;
  margin: 16px auto;
  width: 100%;
`;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

export default () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const result = await API.graphql(graphqlOperation(listNotes));

      setNotes(
        result.data.listNotes.items.sort((a, b) => {
          if (a.updatedAt > b.updatedAt) return -1;
          else return 1;
        })
      );
    };

    fetchNotes();
  }, []);

  return (
    <Container>
     <View style={styles.container}>
        <Form type={User} /> {/* Notice the addition of the Form component */}
      </View>
    </Container>
  );
};
