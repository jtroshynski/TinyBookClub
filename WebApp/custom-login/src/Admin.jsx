
import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { Header, Icon, Table } from 'semantic-ui-react';

import { checkAuthentication } from './helpers';

export default withAuth(class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this.getPosts();
    }
 
    getPosts = async () => {

    }
 
    addNewPost = () => {

    }
 
    handleCancel = async () => {
    }
 
    handleEdit = (postId) => {

    }
 
    handleDelete = async (postId) => {

    }
 
    handleSubmit = async (event) => {
    }



   render() {
       return (
           <div>
               <button type="button" class="mt-4 mb-2 btn btn-primary btn-sm float-right" onClick={this.addNewPost}>
                   Add New Post
               </button>
           </div >
       );
   }
});
