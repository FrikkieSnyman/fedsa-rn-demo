import axios from "axios";

const hn = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getTopStories(): Promise<number[]> {
  const resp = await hn.get<number[]>("/topstories.json");

  return resp.data;
}

export async function getItem(id: number): Promise<HNItem> {
  const resp = await hn.get<HNItem>(`/item/${id}.json`);
  return resp.data;
}

export type HNItem = {
  id: number;
} & Partial<{
  by: string; // The username of the item's author.
  descendants: number; // In the case of stories or polls, the total comment count.
  kids: number[]; // The ids of the item's comments, in ranked display order.
  score: number; // The story's score, or the votes for a pollopt.
  time: number; // Creation date of the item, in Unix Time.
  title: string; // The title of the story, poll or job. HTML.
  type: "job" | "story" | "comment" | "poll" | "pollopt"; // The type of item. One of "job", "story", "comment", "poll", or "pollopt".
  url: string; // The URL of the story.
  text: string; // The comment, story or poll text. HTML.
  deleted: boolean; // true if the item is deleted.
  dead: boolean; // true if the item is dead.
  parent: number; // The comment's parent: either another comment or the relevant story.
  poll: number; // The pollopt's associated poll.
  parts: number[]; // A list of related pollopts, in display order.
}>;
