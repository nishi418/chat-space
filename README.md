# README

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer||
|user_name|string|index, null: false, unique: true|
|mail|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :messages
- has_many :group_user
- has_many :groups. through: :group_user

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer||
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer||
|group_name|string|null: false, unique: true|

### Association
- has_many :message
- has_many :group_user
- has_many :users, through: :group_user