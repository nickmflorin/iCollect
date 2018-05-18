export const LOGGED_IN = 'auth/LOGGED_IN';
export const LOGGED_OUT = 'auth/LOGGED_OUT';

const NOTIFY = true;
const NOTIFY_ERRORS = true;

export const generator = (type) => (
	{
		request : type.toUpperCase() + '_REQUEST',
		success : type.toUpperCase() + '_SUCCESS',
		error : type.toUpperCase() + '_ERROR',
	}	
)

export const ActionHandler = function(dispatch){

	this.notify = (action, error) => {
		if(NOTIFY){
			console.log(action)
		}	
		if(NOTIFY_ERRORS && error){
			console.log(error)
		}
	}

	this.getActionGenerator = (type) => {
		var actionGenerator = generator(type)
	    if(actionGenerator === undefined){
	    	throw new Error('Invalid Action Type Supplied')
	    }
	    return actionGenerator
	}
    
	this.request = (type) => {
		var generator = this.getActionGenerator(type)
		this.notify(generator.request)

        dispatch({
            type : generator.request,
        })
    }
    this.success = (type, data) => {
    	var generator = this.getActionGenerator(type)
    	this.notify(generator.success)

        dispatch({
            type : generator.success,
            data : data,
        })
    }
    this.error = (type, error) => {
    	var generator = this.getActionGenerator(type)
    	this.notify(generator.error, error)

        dispatch({
            type : generator.error,
            error : error,
        })
    }
    return this 
}

