<template>
    <div class="container">
        <div class="row mt-3">
          <form class="col">

            <div class="form-row">
              <div class="col">
                <input type="text" v-model="input.name" class="form-control" placeholder="Employee Name">
              </div>

              <div class="col">
                <select name="designation" v-model="input.designation" class="form-control">
                  <option value="" disabled selected>Designation</option>
                  <option value="Manager">Manager</option>
                  <option value="Director">Director</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Stuff">Stuff</option>
                </select>
              </div>
              
              <div class="col">
                <input type="text" onfocus="(this.type='date')" onblur="(this.type='text')" v-model="input.jdate" class="form-control" placeholder="Joining Date" >
              </div>
            </div>

            <div class="col-md-4 offset-md-4 mt-3">
              <button v-if="savebtn" @click.prevent="save" class="btn btn-primary custombtn mr-3">Save</button>
              <button v-if="updatebtn" @click.prevent="update(input.id)" class="btn btn-primary custombtn mr-3">Update</button>
              <button @click.prevent="clear" class="btn btn-info custombtn">Clear</button>
            </div>
            
        </form>
      </div>
      
      <div class="row mt-3">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Joining Date</th>
                        
                        <th class="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.designation }}</td>
                    <td>{{ item.jdate }}</td>
                    <td>
                        <button @click="edit(item)" class="btn btn-warning btn-sm custombtn mr-3">Edit</button>
                        <button @click="destroy(item)" class="btn btn-danger btn-sm custombtn">Delete</button>
                    </td>
                </tr> 
              </tbody>
            </table>
        </div>
  </div>

</template>

<script>

export default {
  name: 'UI',
  data () {
    return {
      ct: 2,
      items: [],
      input: {
        id: '',
        name: '',
        designation: '',
        jdate: ''
      },      
      savebtn: true,
      updatebtn: false
    }
  },
  created: function() {
      this.view()
  },
  methods: {
    view: function(){
      this.items = [
        // { id: 1, name: 'Muhsin', designation: 'Engineer', jdate: '2019-03-13' }  
      ]
    },
    save: function () {
		if(this.input.name && this.input.designation && this.input.jdate){
			let id = this.ct++
			let name = this.input.name
			let designation = this.input.designation
			let jdate = this.input.jdate

			this.items.push({ id: id, name: name, designation: designation, jdate: jdate })
        	this.clear()
		}
    },
    clear: function() {
        this.savebtn = true
        this.updatebtn = false

        this.input = {} 
    }, 
    edit: function(item){
        this.savebtn = false
        this.updatebtn = true

        this.input = item
    },
    update: function(id){
      this.items.forEach( a=> {
        if(id == a.id){
          Object.assign(a, this.input)
        }
      })
      
      this.clear()
    },
    destroy: function (item){
        var del = this.items.indexOf(item)
        this.items.splice(del, 1)
    }
  }
}
</script>

<style scoped>
.custombtn {
  width: 45% !important;
}

</style>
