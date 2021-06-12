import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

PatientList.propTypes = {
    posts: PropTypes.array,
};

PatientList.defaultProps = {
    posts: [],
}

function PatientList(props) {
    const { posts } = props;

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Idno</th>
                    <th>Planeid</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => (
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.name}</td>
                        <td>{post.address}</td>
                        <td>{post.idno}</td>
                        <td>{post.planeid}</td>
                    </tr>
                ))
                }
            </tbody>
        </Table>
    );
}

export default PatientList;