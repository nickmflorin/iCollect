export class CustomError extends Error {
	constructor(message, type, detail){
		super(message)

		this.message = message;
		this.detail = detail;
		this.type = type;
		this.code = null;
	}
}

// Detail: (1) missing, (2) invalid, (3) general
export class FormError extends CustomError {
	constructor(field, detail, message = null){

		if(!message){
			message = "";
			if(detail == 'missing'){
				message = 'The field ' + field + ' is required.'
			}
			else if(detail == 'invalid'){
				message = 'The format for ' + field + ' is invalid.'
			}
			else if(detail == 'general'){
				message = 'There was an error validating the form.'
			}
		}
		super(message, 'form-error', detail)
		this.field = field;
	}
}

export class Errors {
	constructor(initial){
		this.errors = initial || []
	}
	add(error){
		if(error){
			this.errors.push(error)
		}
	}
	collect(){
		if(this.errors.length != 0){
			return this.errors 
		}
		return null;
	}
}