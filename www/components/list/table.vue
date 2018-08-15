<template>
    <div class="table-record">
        <div class="header">紀錄列表</div>
        <table cellspacing="0">
            <tr>
                <th> Name </th>
                <th> CardID </th>
                <th> Department </th>
                <th> Privilege </th>
                <th> Time </th>
            </tr>
            <tr v-for="element in this.records">
                <td> {{element.name}} </td>
                <td> {{element.cardid}} </td>
                <td> {{element.department}} </td>
                <td> {{element.privilege}} </td>
                <td> {{element.time}} </td>
            </tr>
        </table>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            records: null
        }
    },
    created() {
        // fetch all records from database.
        fetch('http://localhost:3000/record/getAllRecord', {method: 'GET'}).then(response => { 
            return response.json();
        }).then(data => {
            this.records = data;
            return data;
        })
    }
}
</script>

<style scoped>
.table-record {
    display: block;
    border: 1px solid #297e52;
    border-radius: 10px;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
    max-width: calc(100% - 2em);
    margin: 1em auto;
    overflow: hidden;
    width: 100%;
}

.header {
    background-color: #297e52;
    color: white;
    font-size: 1.5em;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
}

table {
    width: 100%;
}

table td, th { 
    color: #16452d;
    padding: 10px; 
}
   
table td {
    text-align: center;
    vertical-align: middle;
}

table td:last-child {
    font-size: 0.95em;
    line-height: 1.4;
    text-align: left;
}

   
table th { 
    background-color: #aae3c6;
    font-weight: 300;
}
   
table tr:nth-child(2n) { background-color: white; }
table tr:nth-child(2n+1) { background-color: #aae3c6 }



</style>
