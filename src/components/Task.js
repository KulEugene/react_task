import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import {
    BarChart, Bar, Cell,ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts'
import {BootstrapTable,
    TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import '../table.css'


export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/p82xhe2a/';
}

class ProductCategoryRow extends React.Component {
    // Выводит название категории
    render() {
        return ( <tr><th colSpan="2"> { this.props.category } </th></tr> );
    }
}

// Компонент ProductRow
class ProductRow extends React.Component {
    render() {

        var name = this.props.product.stocked ?
            this.props.product.name :
            <span > {this.props.product.name} </span>;
        return (
            <tr>
                <td> { name }</td>
                <td> { this.props.product.uv } </td>
                <td className={hide}> { this.props.product.pw } </td>
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
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;

        });
        return (
            <table>
                <thead>
                <tr className={'trTable'}>
                    <th> {table[0]} </th>
                    <th> {table[1]} </th>
                    <th className={hide}> {table[2]}  </th>

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

// Компонент FilterableProductTable - главный комопнент
class FilterableProductTable extends React.Component {
    // Конструктор класса
    constructor(props) {
        super(props);
        // Устанавливаем значения по умолчанию для this.state.filterText и this.state.inStockOnly
        this.state = { filterText: '',  inStockOnly: false };
        // Передаем 'this' через .bind() в слушатели событий
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }
    // Слушатель событий меняет значение this.state.filterText
    handleFilterTextInput(filterText) {
        this.setState({ filterText: filterText });
    }
    // Слушатель событий меняет значение this.state.inStockOnly
    handleInStockInput(inStockOnly) {
        this.setState({ inStockOnly: inStockOnly })
    }
    // Отправляем на рендер сборку из комопонетов SearchBar и ProductTable передав в них необходимые реквизиты
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
                    products={ this.props.products }
                    filterText={ this.state.filterText }
                    inStockOnly={ this.state.inStockOnly }
                />
            </div>
        );
    }
}

var PRODUCTS = [
    {category: 'Спортивные Товары', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Спортивные Товары', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Спортивные Товары', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Электроника', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Электроника', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Электроника', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function getName(table1,table2,table3){
    table[0]=table1
    table[1]=table2
    table[2]=table3
}

function Hide(index){
    if (index===0){
        hide="thHide"
    }
    else{
        hide="thVision"
    }

}

var data2,order1,order2,table=['','',''],hide=0
export class Task extends React.Component {

    onBtnClick = e => {
        var i = +e.currentTarget.innerText
        console.log(i)
        if(i===1.3){
            this.props.task_1_3()
           getName('Дата','% проблемных заказов','% одобренных заказов')
            Hide(1)
        }
        if(i===1.4){
            this.props.task_1_4()
           getName('Дата','Оставленные деньги','Потерянные деньги')
            Hide(1)
        }
        if(i===2.1){
            this.props.task_2_1()
            getName('Имя','количество товаров','')
            Hide(0)
        }
        if(i===2.2){
            this.props.task_2_2()
            getName('Имя','Оставленные деньги','')
            Hide(0)
        }
        if(i===2.3){
            this.props.task_2_3()
           getName('Имя','Потерянные деньги','')
            Hide(0)
        }

        if(i===3.1){
            this.props.task_3_1()
           getName('Популярные товары','Количество','')
            Hide(0)
        }
        if(i===3.2){
            this.props.task_3_2()
            getName('Название добавки','Количество','')
            Hide(0)

        }


    }
    render() {
        const { data } = this.props
        return (
            <div className="ib page">
                <div className='block-btn'>

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
                        3.1
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        3.2
                    </button>{' '}
                </div>
                <ResponsiveContainer width="95%" height={400}>
                <BarChart
                    data={data}
                    stackOffset="sign"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"  dx={0}  />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="pw" fill="#82ca9d" stackId="stack" />
                    <Bar dataKey="uv" fill="#8884d8" stackId="stack" />
                </BarChart>
                </ResponsiveContainer>

                <div className="block-table">
                    <FilterableProductTable products={data} />,
                </div>
            </div>

        )
    }
}





Task.propTypes = {
    data: PropTypes.array.isRequired,
    task_1_3:PropTypes.func.isRequired,
    task_1_4:PropTypes.func.isRequired,
    task_2_1:PropTypes.func.isRequired,
    task_2_2:PropTypes.func.isRequired,
    task_2_3: PropTypes.func.isRequired,
    task_3_1: PropTypes.func.isRequired,
    task_3_2: PropTypes.func.isRequired
}
