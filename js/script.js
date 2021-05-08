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
		activeMessage: false,
		notice: 'Attiva',
		bell: 'fas fa-bell-slash',
		contacts: [
			{
			name: 'Clara',
			avatar: 'img/avatar_io.jpg',
			visible: true,
			time: 'Ultimo accesso oggi alle 09:37',
			messages: [
				{
					date: '15/04/2021 15:30:55',
					text: 'Hai portato a spasso il cane?',
					status: 'sent',
					active: false
				},
				{
					date: '15/04/2021 15:50:00',
					text: 'Ricordati di dargli da mangiare',
					status: 'sent',
					active: false
				},
				{
					date: '18/01/2021 16:15:22',
					text: 'Tutto fatto!',
					status: 'received',
					active: false
				}
			],
		},
		{
			name: 'Paolo',
			avatar: 'img/avatar_8.jpg',
			visible: true,
			time: 'Ultimo accesso oggi alle 19:47',
			messages: [
				{
					date: '20/04/2021 16:30:00',
					text: 'Ciao come stai?',
					status: 'sent',
					active: false
				},
				{
					date: '21/04/2021 16:30:55',
					text: 'Bene grazie! Stasera ci vediamo?',
					status: 'received',
					active: false
				},
				{
					date: '22/04/2021 16:35:00',
					text: 'Mi piacerebbe ma devo andare a fare la spesa.',
					status: 'sent',
					active: false
				}
			],
		},
		{
			name: 'Lele',
			avatar: 'img/avatar_3.jpg',
			visible: true,
			time: 'Ultimo accesso oggi alle 15:18',
			messages: [
				{
					date: '28/03/2020 10:10:40',
					text: 'La Marianna va in campagna',
					status: 'received',
					active: false
				},
				{
					date: '28/03/2020 10:20:10',
					text: 'Sicuro di non aver sbagliato chat?',
					status: 'sent',
					active: false
				},
				{
					date: '28/03/2020 16:15:22',
					text: 'Ah scusa!',
					status: 'received',
					active: false
				}
			],
		},
		{
			name: 'Luisa',
			avatar: 'img/avatar_6.jpg',
			visible: true,
			time: 'Ultimo accesso oggi alle 13:32',
			messages: [
				{
					date: '19/03/2021 15:30:55',
					text: 'Lo sai che ha aperto una nuova pizzeria?',
					status: 'sent',
					active: false
				},
				{
					date: '19/03/2021 15:50:00',
					text: 'Si, ma preferirei andare al cinema',
					status: 'received',
					active: false
				}
			],
		},
	]
    }, 
    methods: {
		showChat(index) {
			this.showTextContact = index;
			this.activeMessage = false;
		},
		addNewMessages() {
			// cliccando il tasto enter se l'input di newMessage è maggiore di 0 allora pusho un nuovo messaggio con status send nell'array messages
			// resetto l'input newMEssage in modo che dopo l'invio torni ad essere vuota
			
			if( this.newMessage.length > 0) {
				this.contacts[this.showTextContact].messages.push( {
					date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
					text: this.newMessage,
					status: 'sent',
					active: false
				});
				this.newMessage = '';
			}

			const chatCourent = this.showTextContact;
			//  una voltqa inviato il messaggio parte un SetTimeOut che farà partire un nuovo messaggio con status recivied 
			setTimeout(() => {
				this.contacts[chatCourent].messages.push( {
					date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
					text: 'okay',
					status: 'received',
					active: false
				});
				this.contacts[chatCourent].time = 'online';
				setTimeout(() => {
					this.contacts[chatCourent].time = 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm');
				}, 5000);
			}, 3000);
		},	
		// filterContact -> filtro gli elementi di Contacts in base alla lettera o parola che inserisco
		filterContact() {
			this.contacts.forEach((element) => {
				// console.log(element.visible);
				if( element.name.toLowerCase().includes(this.contactFilter.toLowerCase()) ) {
					element.visible = true;
				} else {
					element.visible = false;
				}
			});
		},
		// activeOptMenu -> al click della chevron down si la dropdown diventa visiblie, ricliccandoci diventa nuovamente display:none
		activeOptMenu(index) {

			if( this.activeMessage === index) {
				this.activeMessage = false;
			} else {
				this.activeMessage = index;
			}
			
			
		},
		// deleteMessage -> al click di 'Cancella Messaggio' , il messaggio cliccato verrà eliminato
		deleteMessage(index) {

			this.contacts[this.showTextContact].messages.splice(index, 1);

		},
		// fuori dalle milestone 
		toggleNotice() {
			
			if( this.notice == 'Attiva' ) {
				this.notice =  'Disattiva';
				this.bell = 'fas fa-bell';
			} else if ( this.notice == 'Disattiva') {
				this.notice = 'Attiva';
				this.bell = 'fas fa-bell-slash';
			};
		}
	}

});
