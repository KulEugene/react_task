import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import {
    BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts'

import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import '../table.css'


export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/p82xhe2a/';
}

class RowTd extends React.Component{
    render()
    {
        var text=''
        key = key.filter(function(entry) { return entry.trim() != ''; });
        for(var z=0;z<key.length;z++){
            text=text+'<td> { this.props.product[key[0]] } </td>'
        }
        return (
            {text}
        )
    }
}


class ProductRow extends React.Component {
    render()
    {

        var name = this.props.product.stocked ?
            this.props.product.name :
            <span > {this.props.product.name} </span>;
        return (
            <tr>
                <td> { name }</td>
                <td> { this.props.product[key[0]] } </td>
                <td className={hide}> { this.props.product[key[1]] } </td>
                <td className={hide}> { this.props.product[key[2]] } </td>
                {/*<RowTd/>*/}
            </tr>
        );
    }
}

// Компонент ProductTable
class ProductTable extends React.Component {
    render() {
        let rows = [];
        let lastCategory = null;
        console.log(this.props.inStockOnly)
        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            rows.push(<ProductRow product={product} name={product.name} k={key[0]} ke={key[1]} />);
            lastCategory = product.category;

        });
        return (
            <table>
                <thead>
                <tr className={'trTable'}>
                    <th> {table[0]} </th>
                    <th> {table[1]} </th>
                    <th className={hide}> {table[2]}  </th>
                    <th className={hide}> {table[3]}  </th>
                </tr>
                </thead>
                <tbody> { rows } </tbody>
            </table>
        );
    }
}

// Компонент SearchBar
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }
    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }
    handleInStockInputChange(e) {
        this.props.onInStockInput(e.target.checked);
    }
    render() {
        return (
            <form className='search-input-table'>
                <input
                    type="text"
                    placeholder="Поиск..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange}
                />

            </form>
        );
    }
}


class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = { filterText: '',  inStockOnly: false };
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }
    handleFilterTextInput(filterText) {
        this.setState({ filterText: filterText });
    }
    handleInStockInput(inStockOnly) {
        this.setState({ inStockOnly: inStockOnly })
    }
    render() {
        return (
            <div>
                <SearchBar

                    filterText={ this.state.filterText }
                    inStockOnly={ this.state.inStockOnly }
                    onFilterTextInput={ this.handleFilterTextInput }
                    onInStockInput={ this.handleInStockInput }
                />
                <ProductTable
                    key2={key[2]}
                    key={key}
                    products={ this.props.products }
                    filterText={ this.state.filterText }
                    inStockOnly={ this.state.inStockOnly }
                />
            </div>
        );
    }
}



class Rend extends React.Component {
    render()

    {
        if(flag_graph ===0) {
            return (
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart
                        data={this.props.dataGraph}
                        stackOffset="sign"
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name" dx={0} margin={{
                            top: 20, right: 30, left: 20, bottom: 5,
                        }}/>
                        <YAxis orientation="left" stroke="#8884d8"/>
                        <Tooltip/>
                        <Legend/>

                        <ReferenceLine y={0} stroke="#000"/>
                        <Bar dataKey={key[1]} fill="#82ca9d" stackId="stack"/>
                        <Bar dataKey={key[0]} fill="#8884d8" stackId="stack"/>
                    </BarChart>
                </ResponsiveContainer>

            )
        }
        else {return (
            <ResponsiveContainer width="99%" height={400}>
            <BarChart
                data={this.props.dataGraph}

            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey={key[2]} fill="#8884d8" />
                <Bar yAxisId="left" dataKey={key[1]} fill="#8884d8" />
                <Bar yAxisId="right" dataKey={key[0]} fill="#82ca9d" />
            </BarChart>
            </ResponsiveContainer>


        )}


    }

}

function getName(table1,table2,table3,textKey,textKey2,textKey3,flag){
    table[0]=table1
    table[1]=table2
    table[2]=table3
    key[0]=textKey
    key[1]=textKey2
    key[2]=textKey3
    flag_graph=flag
}






function Hide(index){
    if (index===0){
        hide="thHide"
    }
    else{
        hide="thVision"
    }

}

var table=['','','',''],hide=0,key=[],flag_graph=0,flag=0,dataTable = []


export var countData = 0

export class Task extends React.Component {

    onBtnClickReturn = e => {
        countData=countData-1
        this.props.arrow(dataTable)
        flag=1
    }
    onBtnClickNext= e =>{
        countData=countData+1
        this.props.arrow(dataTable)
        flag=1
    }
    onBtnClick = e => {
        key=[]
        countData=0
        flag=0
        var i = +e.currentTarget.innerText
        console.log(i)
        if(i===1.2){
            this.props.task_1_2()
            getName('Дата','% проблемных заказов','% одобренных заказов','cancelled','closed','',0)
            Hide(1)
        }
        if(i===1.3){
            this.props.task_1_3()
           getName('Дата','% проблемных заказов','% одобренных заказов','cancelled','closed','',0)
            Hide(1)
        }
        if(i===1.4){
            this.props.task_1_4()
           getName('Дата','Оставленные деньги','Потерянные деньги','profit','loss','',0)
            Hide(1)
        }
        if(i===2.1){

            this.props.task_2_1()
            getName('Имя','количество товаров','','products','','',0)
            Hide(0)
        }
        if(i===2.2){

            this.props.task_2_2()
            getName('Имя','Прибыль','',"profit",'','',0)
            Hide(0)
        }
        if(i===2.3){

            this.props.task_2_3()
           getName('Имя','Убытки','','loss','','',0)
            Hide(0)
        }
        if(i===2.4){
            this.props.task_2_4()
            getName('Имя','количество покупок','прибыль','products','profit','loss',1)
            Hide(1)
            table[3]='убытки'
        }
        if(i===3.1){
            this.props.task_3_1()
           getName('Популярные товары','Количество','','uv','','',0)
            Hide(0)
        }
        if(i===3.2){
            this.props.task_3_2()
            getName('Название добавки','Количество','','uv','','',0)
            Hide(0)

        }
    }
    render() {
        const { data } = this.props
        if (flag===0) {
         dataTable=data
        }
        return (
            <div className="ib page">
                <div className='block-btn'>
                    <button className="btn" onClick={this.onBtnClick}>
                        1.2
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        1.3
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        1.4
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                       2.1
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                       2.2
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        2.3
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        2.4
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        3.1
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        3.2
                    </button>{' '}

                </div>

            <Rend dataGraph={data}/>
            <div className={'arrow'}>
                <button className="btn" onClick={this.onBtnClickReturn}>
                    стрелка назад
                </button>{' '}
                <button className="btn" onClick={this.onBtnClickNext}>
                    стрелка вперед
                </button>{' '}
            </div>

                <div className="block-table">
                    <FilterableProductTable products={dataTable}  />,
                </div>

            </div>

        )
    }
}





Task.propTypes = {
    data: PropTypes.array.isRequired,
    task_1_2:PropTypes.func.isRequired,
    arrow:PropTypes.func.isRequired,
    task_1_3:PropTypes.func.isRequired,
    task_1_4:PropTypes.func.isRequired,
    task_2_1:PropTypes.func.isRequired,
    task_2_2:PropTypes.func.isRequired,
    task_2_3: PropTypes.func.isRequired,
    task_2_4:PropTypes.func.isRequired,
    task_3_1: PropTypes.func.isRequired,
    task_3_2: PropTypes.func.isRequired
}
