

export const dateToString = (date, time= null) => {
	const timeZone = 'Europe/Brussels';
	const event = new Date(date);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	if(date && date !== '')
    	return event.toLocaleDateString('fr-FR', options) +' '+ (time ? new Date(date).toLocaleTimeString('fr-FR', {  timeZone: timeZone }) : '')
   	return '';
}

export const textLimit = (string) => {
	if(string) return string.length > 50 ? string.substring(0,50)+'...' : string;
	return '';	
}
