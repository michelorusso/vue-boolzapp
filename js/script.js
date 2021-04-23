// Milestone 1
// Replica della grafica con la possibilità di 
// avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: 
// tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
// visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio:
// l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: 
// ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// Ricerca utenti: 
// scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 
var app = new Vue(
    {
    el: '#root',
    data: {  
		showTextContact: 0,
		newMessage: '',
		contactFilter: '',
		contacts: [
			{
			name: 'Clara',
			avatar: 'img/avatar_io.jpg',
			visible: true,
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
			visible: true,
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
			visible: true,
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
			visible: true,
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
		},
		addNewMessages() {
			// cliccando il tasto enter se l'input di newMessage è maggiore di 0 allora pusho un nuovo messaggio con status send nell'array messages
			// resetto l'input newMEssage in modo che dopo l'invio torni ad essere vuota
			// una voltqa inviato il messaggio parte un SetTimeOut che farà partire un nuovo messaggio con status recivied 
			if( this.newMessage.length > 0) {
				this.contacts[this.showTextContact].messages.push( {
					date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
					text: this.newMessage,
					status: 'sent'
				});
				this.newMessage = '';
			}
			setTimeout(() => {
				this.contacts[this.showTextContact].messages.push( {
					date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
					text: 'okay',
					status: 'received'
				})
			}, 3000);
		},	
		filterContact() {
			this.contacts.forEach((element) => {
				// console.log(element.visible);
				if( element.name.toLowerCase().includes(this.contactFilter.toLowerCase()) ) {
					element.visible = true;
				} else {
					element.visible = false;
				}
			});
		}
	}

});
