export class Contact {
  _id?: string;
  name: string;
  email: string;
  phone: {
    mobile: string;
    work: string;
  }
  client_ip: string;
  aff_id: string;
  transaction_id: string;
  site_id: string;
  session_id: string;
  order_id: string
  created: string;
}
