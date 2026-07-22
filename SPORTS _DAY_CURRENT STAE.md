# SPORTS_DAY_CURRENT_STATE

## Project

Baririball Academy's 3rd Sports Day Registration Platform

## Status

MVP Complete

## Event List

### Individual Events

- Egg and Spooning (8)
- 100 Metre Mince (8)
- Handbag Toss (8)
- Ball Sack Race (8)
- Drag (In A Bag) Race (8)

### Team Events

- Throwmosexual
  - 8 teams
  - 2 members per team

- Tug of Whore
  - 4 teams
  - 4 members per team

- Dildo Relay
  - 8 teams
  - 3 members per team

## Database Tables

- participants
- events
- teams
- team_members
- registration_events

## Key Features

### Public Site

✅ Homepage

✅ Registration form

✅ Event selection

✅ Team selection

✅ Team member visibility

### Admin

✅ Dashboard

✅ Registrations page

✅ Events page

✅ Capacity tracking

## Important Learnings

Teams are linked to events using:

- event_id

Teams are filtered in:

- components/RegisterForm.tsx

A previous bug caused all teams to appear under all events.
This was fixed by filtering teams by event_id.

## Outstanding Tasks

### Nice to Have

- Show 1/2 members
- Show FULL when team complete
- Prevent joining full teams
- Excel export

### Not Planned

- Waiting list
- Complex email workflows

## Deployment

Hosted on:

- Vercel

Database:

- Supabase
