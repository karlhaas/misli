# 11.12.2017 08:45 - 13:15 (4:30)

## 08:45
- neues BitBucket Repository

## 09:00
- Upgrade CLI
- New Angular project including routing ...

## 9:30
- Routing including Lazy Loading and NotFound handling

## 10:15
- Add keyboard and presenter navigation + basic colors

## 11:15
- Angular Flex Layout and mouse wheel navigation

## 12:35
- Add NGRX support and read data from store

## 13:15
- Basic edit components (no functionality yet)

# 11.12.2017 16:30 - 18:30 (2)
- More advanced show and edit functionality
- Save store in local storage

# 13.12.2017 7:15

## 8:10
- Added Angular Material (Card, Icon, Button, Input)

## 9:00
- Improved navigation


# Pitfalls
## Angular Flex Layout
- FlexLayoutModule not added (added just to the app module) -> styles not applied without any warning

## NGRX
- StoreRouterConnectingModule does not work well with ngrx-store-freeze
- Not initializing state in prod mode
  - had to switch to daily build
  - problem with npm -> downgrade node to 6LTS

## future-proof architecture vs KISS

## AOT
