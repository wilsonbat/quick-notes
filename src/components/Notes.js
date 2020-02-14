import React, { useState, useEffeict ,Component,Text, TextInput, View } from "react";

import { API, graphqlOperation } from "aws-amplify";
import styled from "@emotion/styled";

import Note from "./Note";
import { listNotes } from "../graphql/queries";
import { updateNote, deleteNote } from "../graphql/mutations";















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
     <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    </Container>
  );
};
