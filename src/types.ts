export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface ClientStory {
  id: string;
  number: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  service: string;
  additionalNotes: string;
}
