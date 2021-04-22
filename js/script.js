// Milestone 1
// Replica della grafica con la possibilità di 
// avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: 
// tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
// visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
var app = new Vue(
    {
    el: '#root',
    data: {  
		showTextContact: 0,
		contacts: [
			{
			name: 'Clara',
			avatar: 'img/avatar_io.jpg',
			visible: true,
			chatActive: 'courentchat',
			time: '09:37',
			messages: [
				{
					date: '15/04/2021 15:30:55',
					text: 'Hai portato a spasso il cane?',
					status: 'sent'
				},
				{
					date: '15/04/2021 15:50:00',
					text: 'Ricordati di dargli da mangiare',
					status: 'sent'
				},
				{
					date: '18/01/2021 16:15:22',
					text: 'Tutto fatto!',
					status: 'received'
				}
			],
		},
		{
			name: 'Paolo',
			avatar: 'img/avatar_8.jpg',
			visible: false,
			chatActive: '',
			time: '19:47',
			messages: [
				{
					date: '20/04/2021 16:30:00',
					text: 'Ciao come stai?',
					status: 'sent'
				},
				{
					date: '21/04/2021 16:30:55',
					text: 'Bene grazie! Stasera ci vediamo?',
					status: 'received'
				},
				{
					date: '22/04/2021 16:35:00',
					text: 'Mi piacerebbe ma devo andare a fare la spesa.',
					status: 'sent'
				}
			],
		},
		{
			name: 'Lele',
			avatar: 'img/avatar_3.jpg',
			visible: false,
			chatActive: '',
			time: '15:18',
			messages: [
				{
					date: '28/03/2020 10:10:40',
					text: 'La Marianna va in campagna',
					status: 'received'
				},
				{
					date: '28/03/2020 10:20:10',
					text: 'Sicuro di non aver sbagliato chat?',
					status: 'sent'
				},
				{
					date: '28/03/2020 16:15:22',
					text: 'Ah scusa!',
					status: 'received'
				}
			],
		},
		{
			name: 'Luisa',
			avatar: 'img/avatar_6.jpg',
			visible: false,
			chatActive: '',
			time: '13:32',
			messages: [
				{
					date: '19/03/2021 15:30:55',
					text: 'Lo sai che ha aperto una nuova pizzeria?',
					status: 'sent'
				},
				{
					date: '19/03/2021 15:50:00',
					text: 'Si, ma preferirei andare al cinema',
					status: 'received'
				}
			],
		},
	]
    }, 
    methods: {
		showChat(index) {
			this.showTextContact = index;
			this.contacts.forEach((element, i) => (i != index) ? element.chatActive = "" : element.chatActive = "courentchat");
		}	
		
	}

});
