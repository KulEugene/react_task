import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Task } from '../components/Task'
import { task_1_3 } from '../actions/task-1/task_1_3.js'
import { task_1_4 } from '../actions/task-1/task_1_4.js'
import { task_2_1 } from '../actions/task-2/task_2_1.js'
import { task_2_2 } from '../actions/task-2/task_2_2.js'
import { task_2_3 } from '../actions/task-2/task_2_3.js'
import { task_3_1 } from '../actions/task-3/task_3_1.js'
import { task_3_2 } from '../actions/task-3/task_3_2.js'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';




class App extends Component {
  render() {
    const { user, page, getPhotosAction,view,getTaskAction_2_3,getTaskAction_2_2,getTaskAction_1_3,getTaskAction_3_2,getTaskAction_3_1,getTaskAction_2_1,getTaskAction_1_4} = this.props
    return (
      <div className="app">
        <Task data={view.list}
         task_3_1={getTaskAction_3_1}
         task_2_3={getTaskAction_2_3}
         task_2_2={getTaskAction_2_2}
         task_1_3={getTaskAction_1_3}
         task_3_2={getTaskAction_3_2}
         task_2_1={getTaskAction_2_1}
         task_1_4={getTaskAction_1_4}
        />
        {/*<Page*/}
        {/*  photos={page.photos}*/}
        {/*  year={page.year}*/}
        {/*  isFetching={page.isFetching}*/}
        {/*  getPhotos={getPhotosAction}*/}
        {/*/>*/}

      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
      view:store.view
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getPhotosAction: year => dispatch(getPhotos(year)),

      getTaskAction_3_1: list => dispatch(task_3_1(list)),
      getTaskAction_3_2: list => dispatch(task_3_2(list)),
      getTaskAction_2_3: list => dispatch(task_2_3(list)),
      getTaskAction_2_2: list => dispatch(task_2_2(list)),
      getTaskAction_2_1: list => dispatch(task_2_1(list)),
      getTaskAction_1_4: list => dispatch(task_1_4(list)),
      getTaskAction_1_3: list => dispatch(task_1_3(list))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
