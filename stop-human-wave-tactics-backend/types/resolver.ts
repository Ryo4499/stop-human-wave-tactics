import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  category?: Maybe<CategoryEntityResponse>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ArticleRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  summary: Scalars['String']['output'];
  tags?: Maybe<TagRelationResponseCollection>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};


export type ArticleLocalizationsArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ArticleFiltersInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  summary?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  uuid?: InputMaybe<StringFilterInput>;
};

export type ArticleInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CategoryRelationResponseCollection>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};


export type CategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  uuid?: InputMaybe<StringFilterInput>;
};

export type CategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Translatebatchtranslatejob_Status {
  Cancelled = 'cancelled',
  Created = 'created',
  Failed = 'failed',
  Finished = 'finished',
  Paused = 'paused',
  Running = 'running',
  Setup = 'setup'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Article | Category | ComponentSharedMetaSocial | ComponentSharedSeo | I18NLocale | Tag | TranslateBatchTranslateJob | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createArticleLocalization?: Maybe<ArticleEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createTagLocalization?: Maybe<TagEntityResponse>;
  createTranslateBatchTranslateJob?: Maybe<TranslateBatchTranslateJobEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteTranslateBatchTranslateJob?: Maybe<TranslateBatchTranslateJobEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateTag?: Maybe<TagEntityResponse>;
  updateTranslateBatchTranslateJob?: Maybe<TranslateBatchTranslateJobEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateArticleLocalizationArgs = {
  data?: InputMaybe<ArticleInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTagArgs = {
  data: TagInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTagLocalizationArgs = {
  data?: InputMaybe<TagInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTranslateBatchTranslateJobArgs = {
  data: TranslateBatchTranslateJobInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTranslateBatchTranslateJobArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateTranslateBatchTranslateJobArgs = {
  data: TranslateBatchTranslateJobInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  translateBatchTranslateJob?: Maybe<TranslateBatchTranslateJobEntityResponse>;
  translateBatchTranslateJobs?: Maybe<TranslateBatchTranslateJobEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTranslateBatchTranslateJobArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTranslateBatchTranslateJobsArgs = {
  filters?: InputMaybe<TranslateBatchTranslateJobFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TagRelationResponseCollection>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};


export type TagArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagLocalizationsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TagFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  uuid?: InputMaybe<StringFilterInput>;
};

export type TagInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type TranslateBatchTranslateJob = {
  __typename?: 'TranslateBatchTranslateJob';
  autoPublish?: Maybe<Scalars['Boolean']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entityIds?: Maybe<Scalars['JSON']['output']>;
  failureReason?: Maybe<Scalars['JSON']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
  sourceLocale?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Enum_Translatebatchtranslatejob_Status>;
  targetLocale?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TranslateBatchTranslateJobEntity = {
  __typename?: 'TranslateBatchTranslateJobEntity';
  attributes?: Maybe<TranslateBatchTranslateJob>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TranslateBatchTranslateJobEntityResponse = {
  __typename?: 'TranslateBatchTranslateJobEntityResponse';
  data?: Maybe<TranslateBatchTranslateJobEntity>;
};

export type TranslateBatchTranslateJobEntityResponseCollection = {
  __typename?: 'TranslateBatchTranslateJobEntityResponseCollection';
  data: Array<TranslateBatchTranslateJobEntity>;
  meta: ResponseCollectionMeta;
};

export type TranslateBatchTranslateJobFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TranslateBatchTranslateJobFiltersInput>>>;
  autoPublish?: InputMaybe<BooleanFilterInput>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  entityIds?: InputMaybe<JsonFilterInput>;
  failureReason?: InputMaybe<JsonFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TranslateBatchTranslateJobFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TranslateBatchTranslateJobFiltersInput>>>;
  progress?: InputMaybe<FloatFilterInput>;
  sourceLocale?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  targetLocale?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TranslateBatchTranslateJobInput = {
  autoPublish?: InputMaybe<Scalars['Boolean']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  entityIds?: InputMaybe<Scalars['JSON']['input']>;
  failureReason?: InputMaybe<Scalars['JSON']['input']>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  sourceLocale?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Enum_Translatebatchtranslatejob_Status>;
  targetLocale?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  GenericMorph: ( Article ) | ( Category ) | ( ComponentSharedMetaSocial ) | ( ComponentSharedSeo ) | ( I18NLocale ) | ( Tag ) | ( TranslateBatchTranslateJob ) | ( Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<RefType['GenericMorph']>>> } ) | ( UploadFolder ) | ( UsersPermissionsPermission ) | ( UsersPermissionsRole ) | ( UsersPermissionsUser );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  ArticleEntity: ResolverTypeWrapper<ArticleEntity>;
  ArticleEntityResponse: ResolverTypeWrapper<ArticleEntityResponse>;
  ArticleEntityResponseCollection: ResolverTypeWrapper<ArticleEntityResponseCollection>;
  ArticleFiltersInput: ArticleFiltersInput;
  ArticleInput: ArticleInput;
  ArticleRelationResponseCollection: ResolverTypeWrapper<ArticleRelationResponseCollection>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanFilterInput: BooleanFilterInput;
  Category: ResolverTypeWrapper<Category>;
  CategoryEntity: ResolverTypeWrapper<CategoryEntity>;
  CategoryEntityResponse: ResolverTypeWrapper<CategoryEntityResponse>;
  CategoryEntityResponseCollection: ResolverTypeWrapper<CategoryEntityResponseCollection>;
  CategoryFiltersInput: CategoryFiltersInput;
  CategoryInput: CategoryInput;
  CategoryRelationResponseCollection: ResolverTypeWrapper<CategoryRelationResponseCollection>;
  ComponentSharedMetaSocial: ResolverTypeWrapper<ComponentSharedMetaSocial>;
  ComponentSharedMetaSocialFiltersInput: ComponentSharedMetaSocialFiltersInput;
  ComponentSharedMetaSocialInput: ComponentSharedMetaSocialInput;
  ComponentSharedSeo: ResolverTypeWrapper<ComponentSharedSeo>;
  ComponentSharedSeoFiltersInput: ComponentSharedSeoFiltersInput;
  ComponentSharedSeoInput: ComponentSharedSeoInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeFilterInput: DateTimeFilterInput;
  ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK: Enum_Componentsharedmetasocial_Socialnetwork;
  ENUM_TRANSLATEBATCHTRANSLATEJOB_STATUS: Enum_Translatebatchtranslatejob_Status;
  FileInfoInput: FileInfoInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatFilterInput: FloatFilterInput;
  GenericMorph: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['GenericMorph']>;
  I18NLocale: ResolverTypeWrapper<I18NLocale>;
  I18NLocaleCode: ResolverTypeWrapper<Scalars['I18NLocaleCode']['output']>;
  I18NLocaleEntity: ResolverTypeWrapper<I18NLocaleEntity>;
  I18NLocaleEntityResponse: ResolverTypeWrapper<I18NLocaleEntityResponse>;
  I18NLocaleEntityResponseCollection: ResolverTypeWrapper<I18NLocaleEntityResponseCollection>;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDFilterInput: IdFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFilterInput: IntFilterInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONFilterInput: JsonFilterInput;
  Mutation: ResolverTypeWrapper<{}>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationArg: PaginationArg;
  PublicationState: PublicationState;
  Query: ResolverTypeWrapper<{}>;
  ResponseCollectionMeta: ResolverTypeWrapper<ResponseCollectionMeta>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFilterInput: StringFilterInput;
  Tag: ResolverTypeWrapper<Tag>;
  TagEntity: ResolverTypeWrapper<TagEntity>;
  TagEntityResponse: ResolverTypeWrapper<TagEntityResponse>;
  TagEntityResponseCollection: ResolverTypeWrapper<TagEntityResponseCollection>;
  TagFiltersInput: TagFiltersInput;
  TagInput: TagInput;
  TagRelationResponseCollection: ResolverTypeWrapper<TagRelationResponseCollection>;
  TranslateBatchTranslateJob: ResolverTypeWrapper<TranslateBatchTranslateJob>;
  TranslateBatchTranslateJobEntity: ResolverTypeWrapper<TranslateBatchTranslateJobEntity>;
  TranslateBatchTranslateJobEntityResponse: ResolverTypeWrapper<TranslateBatchTranslateJobEntityResponse>;
  TranslateBatchTranslateJobEntityResponseCollection: ResolverTypeWrapper<TranslateBatchTranslateJobEntityResponseCollection>;
  TranslateBatchTranslateJobFiltersInput: TranslateBatchTranslateJobFiltersInput;
  TranslateBatchTranslateJobInput: TranslateBatchTranslateJobInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  UploadFile: ResolverTypeWrapper<Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>> }>;
  UploadFileEntity: ResolverTypeWrapper<UploadFileEntity>;
  UploadFileEntityResponse: ResolverTypeWrapper<UploadFileEntityResponse>;
  UploadFileEntityResponseCollection: ResolverTypeWrapper<UploadFileEntityResponseCollection>;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileInput: UploadFileInput;
  UploadFileRelationResponseCollection: ResolverTypeWrapper<UploadFileRelationResponseCollection>;
  UploadFolder: ResolverTypeWrapper<UploadFolder>;
  UploadFolderEntity: ResolverTypeWrapper<UploadFolderEntity>;
  UploadFolderEntityResponse: ResolverTypeWrapper<UploadFolderEntityResponse>;
  UploadFolderEntityResponseCollection: ResolverTypeWrapper<UploadFolderEntityResponseCollection>;
  UploadFolderFiltersInput: UploadFolderFiltersInput;
  UploadFolderInput: UploadFolderInput;
  UploadFolderRelationResponseCollection: ResolverTypeWrapper<UploadFolderRelationResponseCollection>;
  UsersPermissionsCreateRolePayload: ResolverTypeWrapper<UsersPermissionsCreateRolePayload>;
  UsersPermissionsDeleteRolePayload: ResolverTypeWrapper<UsersPermissionsDeleteRolePayload>;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
  UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
  UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
  UsersPermissionsPasswordPayload: ResolverTypeWrapper<UsersPermissionsPasswordPayload>;
  UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
  UsersPermissionsPermissionEntity: ResolverTypeWrapper<UsersPermissionsPermissionEntity>;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsPermissionRelationResponseCollection>;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
  UsersPermissionsRoleEntity: ResolverTypeWrapper<UsersPermissionsRoleEntity>;
  UsersPermissionsRoleEntityResponse: ResolverTypeWrapper<UsersPermissionsRoleEntityResponse>;
  UsersPermissionsRoleEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsRoleEntityResponseCollection>;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: ResolverTypeWrapper<UsersPermissionsUpdateRolePayload>;
  UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
  UsersPermissionsUserEntity: ResolverTypeWrapper<UsersPermissionsUserEntity>;
  UsersPermissionsUserEntityResponse: ResolverTypeWrapper<UsersPermissionsUserEntityResponse>;
  UsersPermissionsUserEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsUserEntityResponseCollection>;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsUserRelationResponseCollection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  ArticleEntity: ArticleEntity;
  ArticleEntityResponse: ArticleEntityResponse;
  ArticleEntityResponseCollection: ArticleEntityResponseCollection;
  ArticleFiltersInput: ArticleFiltersInput;
  ArticleInput: ArticleInput;
  ArticleRelationResponseCollection: ArticleRelationResponseCollection;
  Boolean: Scalars['Boolean']['output'];
  BooleanFilterInput: BooleanFilterInput;
  Category: Category;
  CategoryEntity: CategoryEntity;
  CategoryEntityResponse: CategoryEntityResponse;
  CategoryEntityResponseCollection: CategoryEntityResponseCollection;
  CategoryFiltersInput: CategoryFiltersInput;
  CategoryInput: CategoryInput;
  CategoryRelationResponseCollection: CategoryRelationResponseCollection;
  ComponentSharedMetaSocial: ComponentSharedMetaSocial;
  ComponentSharedMetaSocialFiltersInput: ComponentSharedMetaSocialFiltersInput;
  ComponentSharedMetaSocialInput: ComponentSharedMetaSocialInput;
  ComponentSharedSeo: ComponentSharedSeo;
  ComponentSharedSeoFiltersInput: ComponentSharedSeoFiltersInput;
  ComponentSharedSeoInput: ComponentSharedSeoInput;
  DateTime: Scalars['DateTime']['output'];
  DateTimeFilterInput: DateTimeFilterInput;
  FileInfoInput: FileInfoInput;
  Float: Scalars['Float']['output'];
  FloatFilterInput: FloatFilterInput;
  GenericMorph: ResolversUnionTypes<ResolversParentTypes>['GenericMorph'];
  I18NLocale: I18NLocale;
  I18NLocaleCode: Scalars['I18NLocaleCode']['output'];
  I18NLocaleEntity: I18NLocaleEntity;
  I18NLocaleEntityResponse: I18NLocaleEntityResponse;
  I18NLocaleEntityResponseCollection: I18NLocaleEntityResponseCollection;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: Scalars['ID']['output'];
  IDFilterInput: IdFilterInput;
  Int: Scalars['Int']['output'];
  IntFilterInput: IntFilterInput;
  JSON: Scalars['JSON']['output'];
  JSONFilterInput: JsonFilterInput;
  Mutation: {};
  Pagination: Pagination;
  PaginationArg: PaginationArg;
  Query: {};
  ResponseCollectionMeta: ResponseCollectionMeta;
  String: Scalars['String']['output'];
  StringFilterInput: StringFilterInput;
  Tag: Tag;
  TagEntity: TagEntity;
  TagEntityResponse: TagEntityResponse;
  TagEntityResponseCollection: TagEntityResponseCollection;
  TagFiltersInput: TagFiltersInput;
  TagInput: TagInput;
  TagRelationResponseCollection: TagRelationResponseCollection;
  TranslateBatchTranslateJob: TranslateBatchTranslateJob;
  TranslateBatchTranslateJobEntity: TranslateBatchTranslateJobEntity;
  TranslateBatchTranslateJobEntityResponse: TranslateBatchTranslateJobEntityResponse;
  TranslateBatchTranslateJobEntityResponseCollection: TranslateBatchTranslateJobEntityResponseCollection;
  TranslateBatchTranslateJobFiltersInput: TranslateBatchTranslateJobFiltersInput;
  TranslateBatchTranslateJobInput: TranslateBatchTranslateJobInput;
  Upload: Scalars['Upload']['output'];
  UploadFile: Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversParentTypes['GenericMorph']>>> };
  UploadFileEntity: UploadFileEntity;
  UploadFileEntityResponse: UploadFileEntityResponse;
  UploadFileEntityResponseCollection: UploadFileEntityResponseCollection;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileInput: UploadFileInput;
  UploadFileRelationResponseCollection: UploadFileRelationResponseCollection;
  UploadFolder: UploadFolder;
  UploadFolderEntity: UploadFolderEntity;
  UploadFolderEntityResponse: UploadFolderEntityResponse;
  UploadFolderEntityResponseCollection: UploadFolderEntityResponseCollection;
  UploadFolderFiltersInput: UploadFolderFiltersInput;
  UploadFolderInput: UploadFolderInput;
  UploadFolderRelationResponseCollection: UploadFolderRelationResponseCollection;
  UsersPermissionsCreateRolePayload: UsersPermissionsCreateRolePayload;
  UsersPermissionsDeleteRolePayload: UsersPermissionsDeleteRolePayload;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsPasswordPayload: UsersPermissionsPasswordPayload;
  UsersPermissionsPermission: UsersPermissionsPermission;
  UsersPermissionsPermissionEntity: UsersPermissionsPermissionEntity;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: UsersPermissionsPermissionRelationResponseCollection;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: UsersPermissionsRole;
  UsersPermissionsRoleEntity: UsersPermissionsRoleEntity;
  UsersPermissionsRoleEntityResponse: UsersPermissionsRoleEntityResponse;
  UsersPermissionsRoleEntityResponseCollection: UsersPermissionsRoleEntityResponseCollection;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: UsersPermissionsUpdateRolePayload;
  UsersPermissionsUser: UsersPermissionsUser;
  UsersPermissionsUserEntity: UsersPermissionsUserEntity;
  UsersPermissionsUserEntityResponse: UsersPermissionsUserEntityResponse;
  UsersPermissionsUserEntityResponseCollection: UsersPermissionsUserEntityResponseCollection;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: UsersPermissionsUserRelationResponseCollection;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  category?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Maybe<ResolversTypes['ArticleRelationResponseCollection']>, ParentType, ContextType, RequireFields<ArticleLocalizationsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSharedSeo']>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['TagRelationResponseCollection']>, ParentType, ContextType, RequireFields<ArticleTagsArgs, 'pagination' | 'sort'>>;
  thumbnail?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleEntity'] = ResolversParentTypes['ArticleEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleEntityResponse'] = ResolversParentTypes['ArticleEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['ArticleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleEntityResponseCollection'] = ResolversParentTypes['ArticleEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['ArticleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleRelationResponseCollection'] = ResolversParentTypes['ArticleRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['ArticleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  articles?: Resolver<Maybe<ResolversTypes['ArticleRelationResponseCollection']>, ParentType, ContextType, RequireFields<CategoryArticlesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Maybe<ResolversTypes['CategoryRelationResponseCollection']>, ParentType, ContextType, RequireFields<CategoryLocalizationsArgs, 'pagination' | 'sort'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEntity'] = ResolversParentTypes['CategoryEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEntityResponse'] = ResolversParentTypes['CategoryEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['CategoryEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEntityResponseCollection'] = ResolversParentTypes['CategoryEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['CategoryEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryRelationResponseCollection'] = ResolversParentTypes['CategoryRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['CategoryEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedMetaSocialResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSharedMetaSocial'] = ResolversParentTypes['ComponentSharedMetaSocial']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  socialNetwork?: Resolver<ResolversTypes['ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedSeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSharedSeo'] = ResolversParentTypes['ComponentSharedSeo']> = {
  canonicalURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metaImage?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  metaRobots?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaSocial?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentSharedMetaSocial']>>>, ParentType, ContextType, RequireFields<ComponentSharedSeoMetaSocialArgs, 'pagination' | 'sort'>>;
  metaTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metaViewport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  structuredData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type GenericMorphResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericMorph'] = ResolversParentTypes['GenericMorph']> = {
  __resolveType: TypeResolveFn<'Article' | 'Category' | 'ComponentSharedMetaSocial' | 'ComponentSharedSeo' | 'I18NLocale' | 'Tag' | 'TranslateBatchTranslateJob' | 'UploadFile' | 'UploadFolder' | 'UsersPermissionsPermission' | 'UsersPermissionsRole' | 'UsersPermissionsUser', ParentType, ContextType>;
};

export type I18NLocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocale'] = ResolversParentTypes['I18NLocale']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface I18NLocaleCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['I18NLocaleCode'], any> {
  name: 'I18NLocaleCode';
}

export type I18NLocaleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntity'] = ResolversParentTypes['I18NLocaleEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['I18NLocale']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponse'] = ResolversParentTypes['I18NLocaleEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['I18NLocaleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponseCollection'] = ResolversParentTypes['I18NLocaleEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['I18NLocaleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  changePassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'currentPassword' | 'password' | 'passwordConfirmation'>>;
  createArticle?: Resolver<Maybe<ResolversTypes['ArticleEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'data'>>;
  createArticleLocalization?: Resolver<Maybe<ResolversTypes['ArticleEntityResponse']>, ParentType, ContextType, Partial<MutationCreateArticleLocalizationArgs>>;
  createCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'data'>>;
  createCategoryLocalization?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, Partial<MutationCreateCategoryLocalizationArgs>>;
  createTag?: Resolver<Maybe<ResolversTypes['TagEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateTagArgs, 'data'>>;
  createTagLocalization?: Resolver<Maybe<ResolversTypes['TagEntityResponse']>, ParentType, ContextType, Partial<MutationCreateTagLocalizationArgs>>;
  createTranslateBatchTranslateJob?: Resolver<Maybe<ResolversTypes['TranslateBatchTranslateJobEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateTranslateBatchTranslateJobArgs, 'data'>>;
  createUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateUploadFileArgs, 'data'>>;
  createUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateUploadFolderArgs, 'data'>>;
  createUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsCreateRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsRoleArgs, 'data'>>;
  createUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsUserArgs, 'data'>>;
  deleteArticle?: Resolver<Maybe<ResolversTypes['ArticleEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'id'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteTag?: Resolver<Maybe<ResolversTypes['TagEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteTagArgs, 'id'>>;
  deleteTranslateBatchTranslateJob?: Resolver<Maybe<ResolversTypes['TranslateBatchTranslateJobEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteTranslateBatchTranslateJobArgs, 'id'>>;
  deleteUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFileArgs, 'id'>>;
  deleteUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFolderArgs, 'id'>>;
  deleteUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsDeleteRolePayload']>, ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsRoleArgs, 'id'>>;
  deleteUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsUserArgs, 'id'>>;
  emailConfirmation?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationEmailConfirmationArgs, 'confirmation'>>;
  forgotPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsPasswordPayload']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  login?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  multipleUpload?: Resolver<Array<Maybe<ResolversTypes['UploadFileEntityResponse']>>, ParentType, ContextType, RequireFields<MutationMultipleUploadArgs, 'files'>>;
  register?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  removeFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationRemoveFileArgs, 'id'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'code' | 'password' | 'passwordConfirmation'>>;
  updateArticle?: Resolver<Maybe<ResolversTypes['ArticleEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateArticleArgs, 'data' | 'id'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'data' | 'id'>>;
  updateFileInfo?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateFileInfoArgs, 'id'>>;
  updateTag?: Resolver<Maybe<ResolversTypes['TagEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'data' | 'id'>>;
  updateTranslateBatchTranslateJob?: Resolver<Maybe<ResolversTypes['TranslateBatchTranslateJobEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateTranslateBatchTranslateJobArgs, 'data' | 'id'>>;
  updateUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUploadFileArgs, 'data' | 'id'>>;
  updateUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUploadFolderArgs, 'data' | 'id'>>;
  updateUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsUpdateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsRoleArgs, 'data' | 'id'>>;
  updateUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsUserArgs, 'data' | 'id'>>;
  upload?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUploadArgs, 'file'>>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  article?: Resolver<Maybe<ResolversTypes['ArticleEntityResponse']>, ParentType, ContextType, Partial<QueryArticleArgs>>;
  articles?: Resolver<Maybe<ResolversTypes['ArticleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryArticlesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  categories?: Resolver<Maybe<ResolversTypes['CategoryEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'pagination' | 'sort'>>;
  category?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, Partial<QueryCategoryArgs>>;
  i18NLocale?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponse']>, ParentType, ContextType, Partial<QueryI18NLocaleArgs>>;
  i18NLocales?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryI18NLocalesArgs, 'pagination' | 'sort'>>;
  me?: Resolver<Maybe<ResolversTypes['UsersPermissionsMe']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['TagEntityResponse']>, ParentType, ContextType, Partial<QueryTagArgs>>;
  tags?: Resolver<Maybe<ResolversTypes['TagEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryTagsArgs, 'pagination' | 'sort'>>;
  translateBatchTranslateJob?: Resolver<Maybe<ResolversTypes['TranslateBatchTranslateJobEntityResponse']>, ParentType, ContextType, Partial<QueryTranslateBatchTranslateJobArgs>>;
  translateBatchTranslateJobs?: Resolver<Maybe<ResolversTypes['TranslateBatchTranslateJobEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryTranslateBatchTranslateJobsArgs, 'pagination' | 'sort'>>;
  uploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, Partial<QueryUploadFileArgs>>;
  uploadFiles?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFilesArgs, 'pagination' | 'sort'>>;
  uploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, Partial<QueryUploadFolderArgs>>;
  uploadFolders?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFoldersArgs, 'pagination' | 'sort'>>;
  usersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType, Partial<QueryUsersPermissionsRoleArgs>>;
  usersPermissionsRoles?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRolesArgs, 'pagination' | 'sort'>>;
  usersPermissionsUser?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponse']>, ParentType, ContextType, Partial<QueryUsersPermissionsUserArgs>>;
  usersPermissionsUsers?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUsersArgs, 'pagination' | 'sort'>>;
};

export type ResponseCollectionMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseCollectionMeta'] = ResolversParentTypes['ResponseCollectionMeta']> = {
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  articles?: Resolver<Maybe<ResolversTypes['ArticleRelationResponseCollection']>, ParentType, ContextType, RequireFields<TagArticlesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Maybe<ResolversTypes['TagRelationResponseCollection']>, ParentType, ContextType, RequireFields<TagLocalizationsArgs, 'pagination' | 'sort'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagEntity'] = ResolversParentTypes['TagEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagEntityResponse'] = ResolversParentTypes['TagEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['TagEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagEntityResponseCollection'] = ResolversParentTypes['TagEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['TagEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagRelationResponseCollection'] = ResolversParentTypes['TagRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['TagEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranslateBatchTranslateJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslateBatchTranslateJob'] = ResolversParentTypes['TranslateBatchTranslateJob']> = {
  autoPublish?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  entityIds?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  failureReason?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sourceLocale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ENUM_TRANSLATEBATCHTRANSLATEJOB_STATUS']>, ParentType, ContextType>;
  targetLocale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranslateBatchTranslateJobEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslateBatchTranslateJobEntity'] = ResolversParentTypes['TranslateBatchTranslateJobEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['TranslateBatchTranslateJob']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranslateBatchTranslateJobEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslateBatchTranslateJobEntityResponse'] = ResolversParentTypes['TranslateBatchTranslateJobEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['TranslateBatchTranslateJobEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranslateBatchTranslateJobEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslateBatchTranslateJobEntityResponseCollection'] = ResolversParentTypes['TranslateBatchTranslateJobEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['TranslateBatchTranslateJobEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile']> = {
  alternativeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  related?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntity'] = ResolversParentTypes['UploadFileEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponse'] = ResolversParentTypes['UploadFileEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponseCollection'] = ResolversParentTypes['UploadFileEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileRelationResponseCollection'] = ResolversParentTypes['UploadFileRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFolderResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolder'] = ResolversParentTypes['UploadFolder']> = {
  children?: Resolver<Maybe<ResolversTypes['UploadFolderRelationResponseCollection']>, ParentType, ContextType, RequireFields<UploadFolderChildrenArgs, 'pagination' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  files?: Resolver<Maybe<ResolversTypes['UploadFileRelationResponseCollection']>, ParentType, ContextType, RequireFields<UploadFolderFilesArgs, 'pagination' | 'sort'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pathId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFolderEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntity'] = ResolversParentTypes['UploadFolderEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UploadFolder']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFolderEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntityResponse'] = ResolversParentTypes['UploadFolderEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFolderEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntityResponseCollection'] = ResolversParentTypes['UploadFolderEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFolderRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderRelationResponseCollection'] = ResolversParentTypes['UploadFolderRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsCreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsCreateRolePayload'] = ResolversParentTypes['UsersPermissionsCreateRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsDeleteRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsDeleteRolePayload'] = ResolversParentTypes['UsersPermissionsDeleteRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsLoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsLoginPayload'] = ResolversParentTypes['UsersPermissionsLoginPayload']> = {
  jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UsersPermissionsMe'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMe'] = ResolversParentTypes['UsersPermissionsMe']> = {
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsMeRole']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMeRole'] = ResolversParentTypes['UsersPermissionsMeRole']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPasswordPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPasswordPayload'] = ResolversParentTypes['UsersPermissionsPasswordPayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermission'] = ResolversParentTypes['UsersPermissionsPermission']> = {
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionEntity'] = ResolversParentTypes['UsersPermissionsPermissionEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermission']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsPermissionEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRole'] = ResolversParentTypes['UsersPermissionsRole']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermissionRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissionsArgs, 'pagination' | 'sort'>>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsersArgs, 'pagination' | 'sort'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntity'] = ResolversParentTypes['UsersPermissionsRoleEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponse'] = ResolversParentTypes['UsersPermissionsRoleEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsRoleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUpdateRolePayload'] = ResolversParentTypes['UsersPermissionsUpdateRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUser'] = ResolversParentTypes['UsersPermissionsUser']> = {
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntity'] = ResolversParentTypes['UsersPermissionsUserEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponse'] = ResolversParentTypes['UsersPermissionsUserEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsUserEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsUserRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>;
  ArticleEntity?: ArticleEntityResolvers<ContextType>;
  ArticleEntityResponse?: ArticleEntityResponseResolvers<ContextType>;
  ArticleEntityResponseCollection?: ArticleEntityResponseCollectionResolvers<ContextType>;
  ArticleRelationResponseCollection?: ArticleRelationResponseCollectionResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryEntity?: CategoryEntityResolvers<ContextType>;
  CategoryEntityResponse?: CategoryEntityResponseResolvers<ContextType>;
  CategoryEntityResponseCollection?: CategoryEntityResponseCollectionResolvers<ContextType>;
  CategoryRelationResponseCollection?: CategoryRelationResponseCollectionResolvers<ContextType>;
  ComponentSharedMetaSocial?: ComponentSharedMetaSocialResolvers<ContextType>;
  ComponentSharedSeo?: ComponentSharedSeoResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  GenericMorph?: GenericMorphResolvers<ContextType>;
  I18NLocale?: I18NLocaleResolvers<ContextType>;
  I18NLocaleCode?: GraphQLScalarType;
  I18NLocaleEntity?: I18NLocaleEntityResolvers<ContextType>;
  I18NLocaleEntityResponse?: I18NLocaleEntityResponseResolvers<ContextType>;
  I18NLocaleEntityResponseCollection?: I18NLocaleEntityResponseCollectionResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResponseCollectionMeta?: ResponseCollectionMetaResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagEntity?: TagEntityResolvers<ContextType>;
  TagEntityResponse?: TagEntityResponseResolvers<ContextType>;
  TagEntityResponseCollection?: TagEntityResponseCollectionResolvers<ContextType>;
  TagRelationResponseCollection?: TagRelationResponseCollectionResolvers<ContextType>;
  TranslateBatchTranslateJob?: TranslateBatchTranslateJobResolvers<ContextType>;
  TranslateBatchTranslateJobEntity?: TranslateBatchTranslateJobEntityResolvers<ContextType>;
  TranslateBatchTranslateJobEntityResponse?: TranslateBatchTranslateJobEntityResponseResolvers<ContextType>;
  TranslateBatchTranslateJobEntityResponseCollection?: TranslateBatchTranslateJobEntityResponseCollectionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadFile?: UploadFileResolvers<ContextType>;
  UploadFileEntity?: UploadFileEntityResolvers<ContextType>;
  UploadFileEntityResponse?: UploadFileEntityResponseResolvers<ContextType>;
  UploadFileEntityResponseCollection?: UploadFileEntityResponseCollectionResolvers<ContextType>;
  UploadFileRelationResponseCollection?: UploadFileRelationResponseCollectionResolvers<ContextType>;
  UploadFolder?: UploadFolderResolvers<ContextType>;
  UploadFolderEntity?: UploadFolderEntityResolvers<ContextType>;
  UploadFolderEntityResponse?: UploadFolderEntityResponseResolvers<ContextType>;
  UploadFolderEntityResponseCollection?: UploadFolderEntityResponseCollectionResolvers<ContextType>;
  UploadFolderRelationResponseCollection?: UploadFolderRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsCreateRolePayload?: UsersPermissionsCreateRolePayloadResolvers<ContextType>;
  UsersPermissionsDeleteRolePayload?: UsersPermissionsDeleteRolePayloadResolvers<ContextType>;
  UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
  UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
  UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
  UsersPermissionsPasswordPayload?: UsersPermissionsPasswordPayloadResolvers<ContextType>;
  UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
  UsersPermissionsPermissionEntity?: UsersPermissionsPermissionEntityResolvers<ContextType>;
  UsersPermissionsPermissionRelationResponseCollection?: UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
  UsersPermissionsRoleEntity?: UsersPermissionsRoleEntityResolvers<ContextType>;
  UsersPermissionsRoleEntityResponse?: UsersPermissionsRoleEntityResponseResolvers<ContextType>;
  UsersPermissionsRoleEntityResponseCollection?: UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUpdateRolePayload?: UsersPermissionsUpdateRolePayloadResolvers<ContextType>;
  UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
  UsersPermissionsUserEntity?: UsersPermissionsUserEntityResolvers<ContextType>;
  UsersPermissionsUserEntityResponse?: UsersPermissionsUserEntityResponseResolvers<ContextType>;
  UsersPermissionsUserEntityResponseCollection?: UsersPermissionsUserEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUserRelationResponseCollection?: UsersPermissionsUserRelationResponseCollectionResolvers<ContextType>;
};

