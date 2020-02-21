import baseService from '../baseService';

export function TheaterShow(){
    return baseService.get('/theater/get');
}

export function TheaterMovie(id){
   // return baseService.get('/theater/movieget');
   return baseService.get(`/theater/movie/${id}`);
}

export function TheaterTicket(id,date){
    return baseService.get(`/theater/ticketget/${id}/${date}`);
}

export function updateTicket(id,date,credentials){
    return baseService.put(`/theater/update/${id}/${date}`,credentials);
}