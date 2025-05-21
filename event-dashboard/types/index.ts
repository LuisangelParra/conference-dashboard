export type Event = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  anonymousRating: number;
};

export type Speaker = {
  id: string;
  name: string;
  bio: string;
  photoUrl: string;
};

export type Feedback = {
  id: string;
  eventId: string;
  rating: number;
  comment?: string;
  createdAt: string;
};
