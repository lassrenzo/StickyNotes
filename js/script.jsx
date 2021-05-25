var destination = document.getElementById('react-container')
class Note extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editing: false
        }
    }
    componentWillMount = () => {
        this.style = {
            right: this.randomBetween( 0, window.innerWidth - 150, 'px'),
            top: this.randomBetween( 0, window.innerHeight - 150, 'px')
        }
    }
    randomBetween =( x, y, s ) =>{
        return( x + Math.ceil(Math.random() *(y-x)) ) + 5
    }
    
    edit = () => {
        this.setState({ editing: true })
    }
    
    save = () => {
        this.props.onChange(this.refs.newText.value, this.props.id)
        this.setState({editing: false})
     }
    
    delete = (id) => {
        this.props.onRemove(this.props.id)
    }
    
    renderForm = () => {
        return (
        <div className="note" style={this.style}>
        <textarea ref="newText" placeholder="New Note!" className='form-control'></textarea>
        <button onClick={this.save} className='btn btn-success btn-sm glyphicon glyphicon-floppy-disk'>Save</button> 
    </div>
        )
    
    }
    
    renderDisplay = () => {
        return (
        <div className="note" style={this.style}>
               <p>{this.props.children}</p>
               <span>
                <button onClick={this.edit} className='btn btn-primary fas fa-pencil'> Edit</button>
                <button onClick={this.delete} className='btn btn-danger fas fa-trash'> X</button>
                </span>
            </div>
            )   
    }
    
    render(){
       return( <ReactDraggable>{
           (this.state.editing ) ? this.renderForm() : this.renderDisplay()      
       }</ReactDraggable>)
       }
    }

  
    class Board extends React.Component {
    
    constructor(props){
        super(props); 
            this.state = {
            notes: []
        }
    }
    
    nextId = () => {
        this.uniqueId = this.uniqueId || 0 
        return this.uniqueId++
    }
    
    add = (text) => {
        var notes = [
            ...this.state.notes,
            {
                id: this.nextId(),
                note: text
            }
        ]
        this.setState({notes})
    }
    
    update = ( newText, id ) => {
        var notes = this.state.notes.map(
            note => ( note.id !== id) ?
                note:
                {
                    ...note,
                    note: newText 
                }
        )
        this.setState({notes})
    }
    
    remove = (id) => {
        var notes = this.state.notes.filter(note => note.id !== id) 
        this.setState({notes})
    }
    
    eachNote = ( note ) => {
        return (<Note key={note.id}
                        id={note.id}
                        onChange={this.update}
                        onRemove={this.remove}>{note.note}</Note>)
    }
    
    render(){
        return(
        <div className="board">
            {this.state.notes.map(this.eachNote)}
            <button class="btn btn-sm glyphicon glyphicon-plus btn-success far fa-plus" onClick={()=>this.add("New Note!")}></button>
    </div>
        )
    }
    }
    ReactDOM.render( 
        <div>
           <Note> </Note> 
        <Board count={10}/>
    </div>, destination)