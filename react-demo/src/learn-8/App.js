import React from 'react';

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inpValue: '',
            textValue: '请撰写一篇关于你喜欢的 DOM 元素的文章.',
            selValue: 'coconut'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({inpValue: event.target.value});
        this.setState({textValue: event.target.value});
        this.setState({selValue: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的名字: ' + this.state.inpValue);
        alert('文本域中的文字: ' + this.state.textValue);
        alert('下拉框的选中项: ' + this.state.selValue);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    名字:
                    <input type="text" value={this.state.inpValue} onChange={this.handleChange}/>
                </div>
                <div>
                    文章:
                    <textarea value={this.state.textValue} onChange={this.handleChange}/>
                </div>
                <div>
                    选择你喜欢的风味:
                    <select value={this.state.selValue} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                    
                    {/*注意:你可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项：*/}
                    {/*<select multiple={true} value={['B', 'C']}>*/}

                </div>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}