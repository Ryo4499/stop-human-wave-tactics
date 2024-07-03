import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
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
};

export type CategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
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
};

export type TagInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
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

export type GetArticleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetArticleQuery = { __typename?: 'Query', article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', title: string, summary: string, content: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string } | null }> } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null } | null } | null } | null } | null };

export type GetArticlesQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetArticlesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, summary: string, content: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string } | null }> } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetArticlesByUuidQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetArticlesByUuidQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null };

export type GetArticlesPagesQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetArticlesPagesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetArticlesWithCategoriesQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetArticlesWithCategoriesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, summary: string, content: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string } | null }> } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null, categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, locale?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetArticlesWithCategoriesAndTagsQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetArticlesWithCategoriesAndTagsQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, summary: string, content: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string } | null }> } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null, categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, locale?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null }> } | null, tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, locale?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null }> } | null };

export type GetArticlesWithTagsQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetArticlesWithTagsQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, summary: string, content: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string } | null }> } | null, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null, tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, locale?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetCategoriesQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetCategoriesAndTagsQueryVariables = Exact<{
  categoryFilters?: InputMaybe<CategoryFiltersInput>;
  tagFilters?: InputMaybe<TagFiltersInput>;
  categoryPagination: PaginationArg;
  tagPagination: PaginationArg;
  categorySort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  tagSort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetCategoriesAndTagsQuery = { __typename?: 'Query', tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string } | null }> } | null, categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string } | null }> } | null };

export type GetCategoriesByUuidQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetCategoriesByUuidQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', locale?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetCategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null } | null } | null };

export type GetI18NLocalesQueryVariables = Exact<{
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetI18NLocalesQuery = { __typename?: 'Query', i18NLocales?: { __typename?: 'I18NLocaleEntityResponseCollection', data: Array<{ __typename?: 'I18NLocaleEntity', attributes?: { __typename?: 'I18NLocale', name?: string | null, code?: string | null } | null }> } | null };

export type GetTagQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetTagQuery = { __typename?: 'Query', tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null } | null } | null };

export type GetTagsQueryVariables = Exact<{
  filters?: InputMaybe<TagFiltersInput>;
  pagination: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetTagsQuery = { __typename?: 'Query', tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetTagsByUuidQueryVariables = Exact<{
  filters?: InputMaybe<TagFiltersInput>;
  pagination: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetTagsByUuidQuery = { __typename?: 'Query', tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', locale?: string | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };


export const GetArticleDocument = gql`
    query getArticle($id: ID!, $locale: I18NLocaleCode!) {
  article(id: $id, locale: $locale) {
    data {
      attributes {
        title
        summary
        content
        thumbnail {
          data {
            id
            attributes {
              name
              alternativeText
              caption
              width
              height
              url
              previewUrl
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
        tags {
          data {
            id
            attributes {
              name
            }
          }
        }
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                url
                previewUrl
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        createdAt
        updatedAt
        publishedAt
        locale
      }
    }
  }
}
    `;
export const GetArticlesDocument = gql`
    query getArticles($filters: ArticleFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!) {
  articles(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
    publicationState: LIVE
  ) {
    data {
      id
      attributes {
        title
        summary
        content
        thumbnail {
          data {
            attributes {
              name
              alternativeText
              caption
              width
              height
              url
              previewUrl
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
        tags {
          data {
            id
            attributes {
              name
            }
          }
        }
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                url
                previewUrl
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        createdAt
        updatedAt
        publishedAt
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;
export const GetArticlesByUuidDocument = gql`
    query getArticlesByUUID($filters: ArticleFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!) {
  articles(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
    publicationState: LIVE
  ) {
    data {
      id
    }
  }
}
    `;
export const GetArticlesPagesDocument = gql`
    query getArticlesPages($filters: ArticleFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!) {
  articles(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
    publicationState: LIVE
  ) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;
export const GetArticlesWithCategoriesDocument = gql`
    query getArticlesWithCategories($filters: ArticleFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!) {
  articles(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
    publicationState: LIVE
  ) {
    data {
      id
      attributes {
        title
        summary
        content
        thumbnail {
          data {
            attributes {
              name
              alternativeText
              caption
              width
              height
              url
              previewUrl
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
        tags {
          data {
            id
            attributes {
              name
            }
          }
        }
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                url
                previewUrl
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        createdAt
        updatedAt
        publishedAt
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
  categories(filters: {}, pagination: {}, sort: [], locale: $locale) {
    data {
      id
      attributes {
        name
        articles(filters: {publishedAt: {ne: null}}, publicationState: LIVE) {
          data {
            id
          }
        }
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;
export const GetArticlesWithCategoriesAndTagsDocument = gql`
    query getArticlesWithCategoriesAndTags($filters: ArticleFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!) {
  articles(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
    publicationState: LIVE
  ) {
    data {
      id
      attributes {
        title
        summary
        content
        thumbnail {
          data {
            attributes {
              name
              alternativeText
              caption
              width
              height
              url
              previewUrl
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
        tags {
          data {
            id
            attributes {
              name
            }
          }
        }
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                url
                previewUrl
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        createdAt
        updatedAt
        publishedAt
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
  categories(filters: {}, pagination: {}, sort: [], locale: $locale) {
    data {
      id
      attributes {
        name
        articles(filters: {publishedAt: {ne: null}}, publicationState: LIVE) {
          data {
            id
          }
        }
        locale
      }
    }
  }
  tags(filters: {}, pagination: {}, sort: [], locale: $locale) {
    data {
      id
      attributes {
        name
        articles(filters: {publishedAt: {ne: null}}, publicationState: LIVE) {
          data {
            id
          }
        }
        locale
      }
    }
  }
}
    `;
export const GetArticlesWithTagsDocument = gql`
    query getArticlesWithTags($filters: ArticleFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!) {
  articles(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
    publicationState: LIVE
  ) {
    data {
      id
      attributes {
        title
        summary
        content
        thumbnail {
          data {
            attributes {
              name
              alternativeText
              caption
              width
              height
              url
              previewUrl
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
        tags {
          data {
            id
            attributes {
              name
            }
          }
        }
        seo {
          id
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                url
                previewUrl
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        createdAt
        updatedAt
        publishedAt
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
  tags(filters: {}, pagination: {}, sort: [], locale: $locale) {
    data {
      id
      attributes {
        name
        articles(filters: {publishedAt: {ne: null}}, publicationState: LIVE) {
          data {
            id
          }
        }
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;
export const GetCategoriesDocument = gql`
    query getCategories($filters: CategoryFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!) {
  categories(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
  ) {
    data {
      id
      attributes {
        name
        articles(filters: {publishedAt: {ne: null}}, publicationState: LIVE) {
          data {
            id
          }
        }
        createdAt
        updatedAt
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;
export const GetCategoriesAndTagsDocument = gql`
    query getCategoriesAndTags($categoryFilters: CategoryFiltersInput, $tagFilters: TagFiltersInput, $categoryPagination: PaginationArg!, $tagPagination: PaginationArg!, $categorySort: [String], $tagSort: [String], $locale: I18NLocaleCode!) {
  tags(
    filters: $tagFilters
    pagination: $tagPagination
    sort: $tagSort
    locale: $locale
  ) {
    data {
      id
      attributes {
        name
      }
    }
  }
  categories(
    filters: $categoryFilters
    pagination: $categoryPagination
    sort: $categorySort
    locale: $locale
  ) {
    data {
      id
      attributes {
        name
      }
    }
  }
}
    `;
export const GetCategoriesByUuidDocument = gql`
    query getCategoriesByUUID($filters: CategoryFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!) {
  categories(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
  ) {
    data {
      id
      attributes {
        articles(filters: {publishedAt: {ne: null}}, publicationState: LIVE) {
          data {
            id
          }
        }
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;
export const GetCategoryDocument = gql`
    query getCategory($id: ID!, $locale: I18NLocaleCode!) {
  category(id: $id, locale: $locale) {
    data {
      id
      attributes {
        name
        articles(filters: {publishedAt: {ne: null}}, publicationState: LIVE) {
          data {
            id
          }
        }
        createdAt
        updatedAt
        locale
      }
    }
  }
}
    `;
export const GetI18NLocalesDocument = gql`
    query getI18NLocales($filters: I18NLocaleFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  i18NLocales(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      attributes {
        name
        code
      }
    }
  }
}
    `;
export const GetTagDocument = gql`
    query getTag($id: ID!, $locale: I18NLocaleCode!) {
  tag(id: $id, locale: $locale) {
    data {
      id
      attributes {
        name
        articles(filters: {publishedAt: {ne: null}}, publicationState: LIVE) {
          data {
            id
          }
        }
        createdAt
        updatedAt
        locale
      }
    }
  }
}
    `;
export const GetTagsDocument = gql`
    query getTags($filters: TagFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!) {
  tags(filters: $filters, pagination: $pagination, sort: $sort, locale: $locale) {
    data {
      id
      attributes {
        name
        articles(filters: {publishedAt: {ne: null}}, publicationState: LIVE) {
          data {
            id
          }
        }
        createdAt
        updatedAt
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;
export const GetTagsByUuidDocument = gql`
    query getTagsByUUID($filters: TagFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!) {
  tags(filters: $filters, pagination: $pagination, sort: $sort, locale: $locale) {
    data {
      id
      attributes {
        articles(filters: {publishedAt: {ne: null}}, publicationState: LIVE) {
          data {
            id
          }
        }
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getArticle(variables: GetArticleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetArticleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArticleQuery>(GetArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticle', 'query', variables);
    },
    getArticles(variables: GetArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArticlesQuery>(GetArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticles', 'query', variables);
    },
    getArticlesByUUID(variables: GetArticlesByUuidQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetArticlesByUuidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArticlesByUuidQuery>(GetArticlesByUuidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticlesByUUID', 'query', variables);
    },
    getArticlesPages(variables: GetArticlesPagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetArticlesPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArticlesPagesQuery>(GetArticlesPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticlesPages', 'query', variables);
    },
    getArticlesWithCategories(variables: GetArticlesWithCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetArticlesWithCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArticlesWithCategoriesQuery>(GetArticlesWithCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticlesWithCategories', 'query', variables);
    },
    getArticlesWithCategoriesAndTags(variables: GetArticlesWithCategoriesAndTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetArticlesWithCategoriesAndTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArticlesWithCategoriesAndTagsQuery>(GetArticlesWithCategoriesAndTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticlesWithCategoriesAndTags', 'query', variables);
    },
    getArticlesWithTags(variables: GetArticlesWithTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetArticlesWithTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArticlesWithTagsQuery>(GetArticlesWithTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticlesWithTags', 'query', variables);
    },
    getCategories(variables: GetCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesQuery>(GetCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategories', 'query', variables);
    },
    getCategoriesAndTags(variables: GetCategoriesAndTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCategoriesAndTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesAndTagsQuery>(GetCategoriesAndTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoriesAndTags', 'query', variables);
    },
    getCategoriesByUUID(variables: GetCategoriesByUuidQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCategoriesByUuidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesByUuidQuery>(GetCategoriesByUuidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoriesByUUID', 'query', variables);
    },
    getCategory(variables: GetCategoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoryQuery>(GetCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategory', 'query', variables);
    },
    getI18NLocales(variables?: GetI18NLocalesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetI18NLocalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetI18NLocalesQuery>(GetI18NLocalesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getI18NLocales', 'query', variables);
    },
    getTag(variables: GetTagQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTagQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTagQuery>(GetTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTag', 'query', variables);
    },
    getTags(variables: GetTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTagsQuery>(GetTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTags', 'query', variables);
    },
    getTagsByUUID(variables: GetTagsByUuidQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTagsByUuidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTagsByUuidQuery>(GetTagsByUuidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTagsByUUID', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;