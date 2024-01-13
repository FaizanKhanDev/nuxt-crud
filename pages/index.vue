<template>
  <div>
    <v-col cols="12" md="6">
      <v-text-field v-model="newStudent.firstName" outlined label="First name"></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field v-model="newStudent.lastName" outlined label="Last name"></v-text-field>

    </v-col>
    <v-col cols="6" v-if="!isEdit">
      <v-btn color="primary" block @click="submit"> Submit</v-btn>
    </v-col>
    <v-col cols="6" v-else>
      <v-btn color="primary" block @click="saveEdit"> Edit</v-btn>
    </v-col>


    <ul>
      <h1>Students List</h1>
      <li v-for="(student, i) in studentList" :key="i">

        {{ i + 1 }} {{ student.firstName }}
        {{ student.lastName }}
        <v-btn icon color="blue" @click="edit(student)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-btn icon color="red" @click="remove(student)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newStudent: {
        firstName: "",
        lastName: ""
      },
      studentList: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",

        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Doe",
        },
        {
          id: 3,
          firstName: "Jack",
          lastName: "Doe",
        }
      ],
      isEdit: false
    };
  },
  methods: {
    submit() {
      console.log("submitted", this.newStudent);
      this.studentList.push(this.newStudent)
      this.newStudent = {
        firstName: "",
        lastName: ""
      }
    },
    edit(student) {
      console.log("student", JSON.stringify(student));
      this.newStudent = student;
      this.isEdit = true
    },
    saveEdit() {
      this.isEdit = false;
      let index = this.studentList.findIndex((student) => student.id == this.newStudent.id)
      console.log("index", JSON.stringify(index));
      if (index != -1) {
        this.studentList[index] = this.newStudent;
        this.newStudent = {
          firstName: "",
          lastName: ""
        }
        this.isEdit = false

      }


    },

    remove(value){
      console.log("remove", JSON.stringify(value));
      this.studentList = this.studentList.filter((student) => student.id != value.id)
    }

  }
};
</script>

<style></style>
