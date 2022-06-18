import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
        JSON: any;
        DateTime: any;
        Upload: any;
};

export type Pagination = {
        __typename?: 'Pagination';
        total: Scalars['Int'];
        page: Scalars['Int'];
        pageSize: Scalars['Int'];
        pageCount: Scalars['Int'];
};

export type ResponseCollectionMeta = {
        __typename?: 'ResponseCollectionMeta';
        pagination: Pagination;
};

export enum PublicationState {
        Live = 'LIVE',
        Preview = 'PREVIEW'
}

export type IdFilterInput = {
        and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
        or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
        not?: InputMaybe<IdFilterInput>;
        eq?: InputMaybe<Scalars['ID']>;
        ne?: InputMaybe<Scalars['ID']>;
        startsWith?: InputMaybe<Scalars['ID']>;
        endsWith?: InputMaybe<Scalars['ID']>;
        contains?: InputMaybe<Scalars['ID']>;
        notContains?: InputMaybe<Scalars['ID']>;
        containsi?: InputMaybe<Scalars['ID']>;
        notContainsi?: InputMaybe<Scalars['ID']>;
        gt?: InputMaybe<Scalars['ID']>;
        gte?: InputMaybe<Scalars['ID']>;
        lt?: InputMaybe<Scalars['ID']>;
        lte?: InputMaybe<Scalars['ID']>;
        null?: InputMaybe<Scalars['Boolean']>;
        notNull?: InputMaybe<Scalars['Boolean']>;
        in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
        notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
        between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type BooleanFilterInput = {
        and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
        or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
        not?: InputMaybe<BooleanFilterInput>;
        eq?: InputMaybe<Scalars['Boolean']>;
        ne?: InputMaybe<Scalars['Boolean']>;
        startsWith?: InputMaybe<Scalars['Boolean']>;
        endsWith?: InputMaybe<Scalars['Boolean']>;
        contains?: InputMaybe<Scalars['Boolean']>;
        notContains?: InputMaybe<Scalars['Boolean']>;
        containsi?: InputMaybe<Scalars['Boolean']>;
        notContainsi?: InputMaybe<Scalars['Boolean']>;
        gt?: InputMaybe<Scalars['Boolean']>;
        gte?: InputMaybe<Scalars['Boolean']>;
        lt?: InputMaybe<Scalars['Boolean']>;
        lte?: InputMaybe<Scalars['Boolean']>;
        null?: InputMaybe<Scalars['Boolean']>;
        notNull?: InputMaybe<Scalars['Boolean']>;
        in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
        notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
        between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type StringFilterInput = {
        and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
        or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
        not?: InputMaybe<StringFilterInput>;
        eq?: InputMaybe<Scalars['String']>;
        ne?: InputMaybe<Scalars['String']>;
        startsWith?: InputMaybe<Scalars['String']>;
        endsWith?: InputMaybe<Scalars['String']>;
        contains?: InputMaybe<Scalars['String']>;
        notContains?: InputMaybe<Scalars['String']>;
        containsi?: InputMaybe<Scalars['String']>;
        notContainsi?: InputMaybe<Scalars['String']>;
        gt?: InputMaybe<Scalars['String']>;
        gte?: InputMaybe<Scalars['String']>;
        lt?: InputMaybe<Scalars['String']>;
        lte?: InputMaybe<Scalars['String']>;
        null?: InputMaybe<Scalars['Boolean']>;
        notNull?: InputMaybe<Scalars['Boolean']>;
        in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
        notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
        between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IntFilterInput = {
        and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
        or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
        not?: InputMaybe<IntFilterInput>;
        eq?: InputMaybe<Scalars['Int']>;
        ne?: InputMaybe<Scalars['Int']>;
        startsWith?: InputMaybe<Scalars['Int']>;
        endsWith?: InputMaybe<Scalars['Int']>;
        contains?: InputMaybe<Scalars['Int']>;
        notContains?: InputMaybe<Scalars['Int']>;
        containsi?: InputMaybe<Scalars['Int']>;
        notContainsi?: InputMaybe<Scalars['Int']>;
        gt?: InputMaybe<Scalars['Int']>;
        gte?: InputMaybe<Scalars['Int']>;
        lt?: InputMaybe<Scalars['Int']>;
        lte?: InputMaybe<Scalars['Int']>;
        null?: InputMaybe<Scalars['Boolean']>;
        notNull?: InputMaybe<Scalars['Boolean']>;
        in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
        notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
        between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type FloatFilterInput = {
        and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
        or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
        not?: InputMaybe<FloatFilterInput>;
        eq?: InputMaybe<Scalars['Float']>;
        ne?: InputMaybe<Scalars['Float']>;
        startsWith?: InputMaybe<Scalars['Float']>;
        endsWith?: InputMaybe<Scalars['Float']>;
        contains?: InputMaybe<Scalars['Float']>;
        notContains?: InputMaybe<Scalars['Float']>;
        containsi?: InputMaybe<Scalars['Float']>;
        notContainsi?: InputMaybe<Scalars['Float']>;
        gt?: InputMaybe<Scalars['Float']>;
        gte?: InputMaybe<Scalars['Float']>;
        lt?: InputMaybe<Scalars['Float']>;
        lte?: InputMaybe<Scalars['Float']>;
        null?: InputMaybe<Scalars['Boolean']>;
        notNull?: InputMaybe<Scalars['Boolean']>;
        in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
        notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
        between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type DateTimeFilterInput = {
        and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
        or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
        not?: InputMaybe<DateTimeFilterInput>;
        eq?: InputMaybe<Scalars['DateTime']>;
        ne?: InputMaybe<Scalars['DateTime']>;
        startsWith?: InputMaybe<Scalars['DateTime']>;
        endsWith?: InputMaybe<Scalars['DateTime']>;
        contains?: InputMaybe<Scalars['DateTime']>;
        notContains?: InputMaybe<Scalars['DateTime']>;
        containsi?: InputMaybe<Scalars['DateTime']>;
        notContainsi?: InputMaybe<Scalars['DateTime']>;
        gt?: InputMaybe<Scalars['DateTime']>;
        gte?: InputMaybe<Scalars['DateTime']>;
        lt?: InputMaybe<Scalars['DateTime']>;
        lte?: InputMaybe<Scalars['DateTime']>;
        null?: InputMaybe<Scalars['Boolean']>;
        notNull?: InputMaybe<Scalars['Boolean']>;
        in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
        notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
        between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type JsonFilterInput = {
        and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
        or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
        not?: InputMaybe<JsonFilterInput>;
        eq?: InputMaybe<Scalars['JSON']>;
        ne?: InputMaybe<Scalars['JSON']>;
        startsWith?: InputMaybe<Scalars['JSON']>;
        endsWith?: InputMaybe<Scalars['JSON']>;
        contains?: InputMaybe<Scalars['JSON']>;
        notContains?: InputMaybe<Scalars['JSON']>;
        containsi?: InputMaybe<Scalars['JSON']>;
        notContainsi?: InputMaybe<Scalars['JSON']>;
        gt?: InputMaybe<Scalars['JSON']>;
        gte?: InputMaybe<Scalars['JSON']>;
        lt?: InputMaybe<Scalars['JSON']>;
        lte?: InputMaybe<Scalars['JSON']>;
        null?: InputMaybe<Scalars['Boolean']>;
        notNull?: InputMaybe<Scalars['Boolean']>;
        in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
        notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
        between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
        Facebook = 'Facebook',
        Twitter = 'Twitter'
}

export type ComponentSharedMetaSocialFiltersInput = {
        socialNetwork?: InputMaybe<StringFilterInput>;
        title?: InputMaybe<StringFilterInput>;
        description?: InputMaybe<StringFilterInput>;
        and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
        or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
        not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
};

export type ComponentSharedMetaSocial = {
        __typename?: 'ComponentSharedMetaSocial';
        id: Scalars['ID'];
        socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
        title: Scalars['String'];
        description: Scalars['String'];
        image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSharedSeo = {
        __typename?: 'ComponentSharedSeo';
        id: Scalars['ID'];
        metaTitle: Scalars['String'];
        metaDescription: Scalars['String'];
        metaImage: UploadFileEntityResponse;
        metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
        keywords?: Maybe<Scalars['String']>;
        metaRobots?: Maybe<Scalars['String']>;
        structuredData?: Maybe<Scalars['JSON']>;
        metaViewport?: Maybe<Scalars['String']>;
        canonicalURL?: Maybe<Scalars['String']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
        filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleFiltersInput = {
        id?: InputMaybe<IdFilterInput>;
        title?: InputMaybe<StringFilterInput>;
        content?: InputMaybe<StringFilterInput>;
        slug?: InputMaybe<StringFilterInput>;
        user?: InputMaybe<UsersPermissionsUserFiltersInput>;
        category?: InputMaybe<CategoryFiltersInput>;
        createdAt?: InputMaybe<DateTimeFilterInput>;
        updatedAt?: InputMaybe<DateTimeFilterInput>;
        publishedAt?: InputMaybe<DateTimeFilterInput>;
        and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
        or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
        not?: InputMaybe<ArticleFiltersInput>;
};

export type ArticleInput = {
        title?: InputMaybe<Scalars['String']>;
        content?: InputMaybe<Scalars['String']>;
        slug?: InputMaybe<Scalars['String']>;
        thumbnail?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
        user?: InputMaybe<Scalars['ID']>;
        category?: InputMaybe<Scalars['ID']>;
        publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Article = {
        __typename?: 'Article';
        title: Scalars['String'];
        content: Scalars['String'];
        slug: Scalars['String'];
        thumbnail?: Maybe<UploadFileRelationResponseCollection>;
        user?: Maybe<UsersPermissionsUserEntityResponse>;
        category?: Maybe<CategoryEntityResponse>;
        createdAt?: Maybe<Scalars['DateTime']>;
        updatedAt?: Maybe<Scalars['DateTime']>;
        publishedAt?: Maybe<Scalars['DateTime']>;
};


export type ArticleThumbnailArgs = {
        filters?: InputMaybe<UploadFileFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleEntity = {
        __typename?: 'ArticleEntity';
        id?: Maybe<Scalars['ID']>;
        attributes?: Maybe<Article>;
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

export type ArticleRelationResponseCollection = {
        __typename?: 'ArticleRelationResponseCollection';
        data: Array<ArticleEntity>;
};

export type CategoryFiltersInput = {
        id?: InputMaybe<IdFilterInput>;
        name?: InputMaybe<StringFilterInput>;
        slug?: InputMaybe<StringFilterInput>;
        articles?: InputMaybe<ArticleFiltersInput>;
        createdAt?: InputMaybe<DateTimeFilterInput>;
        updatedAt?: InputMaybe<DateTimeFilterInput>;
        and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
        or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
        not?: InputMaybe<CategoryFiltersInput>;
};

export type CategoryInput = {
        name?: InputMaybe<Scalars['String']>;
        slug?: InputMaybe<Scalars['String']>;
        articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Category = {
        __typename?: 'Category';
        name: Scalars['String'];
        slug: Scalars['String'];
        articles?: Maybe<ArticleRelationResponseCollection>;
        createdAt?: Maybe<Scalars['DateTime']>;
        updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CategoryArticlesArgs = {
        filters?: InputMaybe<ArticleFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
        publicationState?: InputMaybe<PublicationState>;
};

export type CategoryEntity = {
        __typename?: 'CategoryEntity';
        id?: Maybe<Scalars['ID']>;
        attributes?: Maybe<Category>;
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

export type UploadFileFiltersInput = {
        id?: InputMaybe<IdFilterInput>;
        name?: InputMaybe<StringFilterInput>;
        alternativeText?: InputMaybe<StringFilterInput>;
        caption?: InputMaybe<StringFilterInput>;
        width?: InputMaybe<IntFilterInput>;
        height?: InputMaybe<IntFilterInput>;
        formats?: InputMaybe<JsonFilterInput>;
        hash?: InputMaybe<StringFilterInput>;
        ext?: InputMaybe<StringFilterInput>;
        mime?: InputMaybe<StringFilterInput>;
        size?: InputMaybe<FloatFilterInput>;
        url?: InputMaybe<StringFilterInput>;
        previewUrl?: InputMaybe<StringFilterInput>;
        provider?: InputMaybe<StringFilterInput>;
        provider_metadata?: InputMaybe<JsonFilterInput>;
        createdAt?: InputMaybe<DateTimeFilterInput>;
        updatedAt?: InputMaybe<DateTimeFilterInput>;
        and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
        or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
        not?: InputMaybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
        name?: InputMaybe<Scalars['String']>;
        alternativeText?: InputMaybe<Scalars['String']>;
        caption?: InputMaybe<Scalars['String']>;
        width?: InputMaybe<Scalars['Int']>;
        height?: InputMaybe<Scalars['Int']>;
        formats?: InputMaybe<Scalars['JSON']>;
        hash?: InputMaybe<Scalars['String']>;
        ext?: InputMaybe<Scalars['String']>;
        mime?: InputMaybe<Scalars['String']>;
        size?: InputMaybe<Scalars['Float']>;
        url?: InputMaybe<Scalars['String']>;
        previewUrl?: InputMaybe<Scalars['String']>;
        provider?: InputMaybe<Scalars['String']>;
        provider_metadata?: InputMaybe<Scalars['JSON']>;
};

export type UploadFile = {
        __typename?: 'UploadFile';
        name: Scalars['String'];
        alternativeText?: Maybe<Scalars['String']>;
        caption?: Maybe<Scalars['String']>;
        width?: Maybe<Scalars['Int']>;
        height?: Maybe<Scalars['Int']>;
        formats?: Maybe<Scalars['JSON']>;
        hash: Scalars['String'];
        ext?: Maybe<Scalars['String']>;
        mime: Scalars['String'];
        size: Scalars['Float'];
        url: Scalars['String'];
        previewUrl?: Maybe<Scalars['String']>;
        provider: Scalars['String'];
        provider_metadata?: Maybe<Scalars['JSON']>;
        related?: Maybe<Array<Maybe<GenericMorph>>>;
        createdAt?: Maybe<Scalars['DateTime']>;
        updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFileEntity = {
        __typename?: 'UploadFileEntity';
        id?: Maybe<Scalars['ID']>;
        attributes?: Maybe<UploadFile>;
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

export type UploadFileRelationResponseCollection = {
        __typename?: 'UploadFileRelationResponseCollection';
        data: Array<UploadFileEntity>;
};

export type I18NLocaleFiltersInput = {
        id?: InputMaybe<IdFilterInput>;
        name?: InputMaybe<StringFilterInput>;
        code?: InputMaybe<StringFilterInput>;
        createdAt?: InputMaybe<DateTimeFilterInput>;
        updatedAt?: InputMaybe<DateTimeFilterInput>;
        and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
        or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
        not?: InputMaybe<I18NLocaleFiltersInput>;
};

export type I18NLocale = {
        __typename?: 'I18NLocale';
        name?: Maybe<Scalars['String']>;
        code?: Maybe<Scalars['String']>;
        createdAt?: Maybe<Scalars['DateTime']>;
        updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
        __typename?: 'I18NLocaleEntity';
        id?: Maybe<Scalars['ID']>;
        attributes?: Maybe<I18NLocale>;
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

export type UsersPermissionsPermissionFiltersInput = {
        id?: InputMaybe<IdFilterInput>;
        action?: InputMaybe<StringFilterInput>;
        role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
        createdAt?: InputMaybe<DateTimeFilterInput>;
        updatedAt?: InputMaybe<DateTimeFilterInput>;
        and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
        or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
        not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
};

export type UsersPermissionsPermission = {
        __typename?: 'UsersPermissionsPermission';
        action: Scalars['String'];
        role?: Maybe<UsersPermissionsRoleEntityResponse>;
        createdAt?: Maybe<Scalars['DateTime']>;
        updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
        __typename?: 'UsersPermissionsPermissionEntity';
        id?: Maybe<Scalars['ID']>;
        attributes?: Maybe<UsersPermissionsPermission>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
        __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
        data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
        id?: InputMaybe<IdFilterInput>;
        name?: InputMaybe<StringFilterInput>;
        description?: InputMaybe<StringFilterInput>;
        type?: InputMaybe<StringFilterInput>;
        permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
        users?: InputMaybe<UsersPermissionsUserFiltersInput>;
        createdAt?: InputMaybe<DateTimeFilterInput>;
        updatedAt?: InputMaybe<DateTimeFilterInput>;
        and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
        or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
        not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
        name?: InputMaybe<Scalars['String']>;
        description?: InputMaybe<Scalars['String']>;
        type?: InputMaybe<Scalars['String']>;
        permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
        users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsRole = {
        __typename?: 'UsersPermissionsRole';
        name: Scalars['String'];
        description?: Maybe<Scalars['String']>;
        type?: Maybe<Scalars['String']>;
        permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
        users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
        createdAt?: Maybe<Scalars['DateTime']>;
        updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UsersPermissionsRolePermissionsArgs = {
        filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
        filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
        __typename?: 'UsersPermissionsRoleEntity';
        id?: Maybe<Scalars['ID']>;
        attributes?: Maybe<UsersPermissionsRole>;
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

export type UsersPermissionsUserFiltersInput = {
        id?: InputMaybe<IdFilterInput>;
        username?: InputMaybe<StringFilterInput>;
        email?: InputMaybe<StringFilterInput>;
        provider?: InputMaybe<StringFilterInput>;
        password?: InputMaybe<StringFilterInput>;
        resetPasswordToken?: InputMaybe<StringFilterInput>;
        confirmationToken?: InputMaybe<StringFilterInput>;
        confirmed?: InputMaybe<BooleanFilterInput>;
        blocked?: InputMaybe<BooleanFilterInput>;
        role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
        articles?: InputMaybe<ArticleFiltersInput>;
        createdAt?: InputMaybe<DateTimeFilterInput>;
        updatedAt?: InputMaybe<DateTimeFilterInput>;
        and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
        or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
        not?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
        username?: InputMaybe<Scalars['String']>;
        email?: InputMaybe<Scalars['String']>;
        provider?: InputMaybe<Scalars['String']>;
        password?: InputMaybe<Scalars['String']>;
        resetPasswordToken?: InputMaybe<Scalars['String']>;
        confirmationToken?: InputMaybe<Scalars['String']>;
        confirmed?: InputMaybe<Scalars['Boolean']>;
        blocked?: InputMaybe<Scalars['Boolean']>;
        role?: InputMaybe<Scalars['ID']>;
        articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUser = {
        __typename?: 'UsersPermissionsUser';
        username: Scalars['String'];
        email: Scalars['String'];
        provider?: Maybe<Scalars['String']>;
        confirmed?: Maybe<Scalars['Boolean']>;
        blocked?: Maybe<Scalars['Boolean']>;
        role?: Maybe<UsersPermissionsRoleEntityResponse>;
        articles?: Maybe<ArticleRelationResponseCollection>;
        createdAt?: Maybe<Scalars['DateTime']>;
        updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UsersPermissionsUserArticlesArgs = {
        filters?: InputMaybe<ArticleFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
        publicationState?: InputMaybe<PublicationState>;
};

export type UsersPermissionsUserEntity = {
        __typename?: 'UsersPermissionsUserEntity';
        id?: Maybe<Scalars['ID']>;
        attributes?: Maybe<UsersPermissionsUser>;
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

export type UsersPermissionsUserRelationResponseCollection = {
        __typename?: 'UsersPermissionsUserRelationResponseCollection';
        data: Array<UsersPermissionsUserEntity>;
};

export type GenericMorph = ComponentSharedMetaSocial | ComponentSharedSeo | Article | Category | UploadFile | I18NLocale | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type FileInfoInput = {
        name?: InputMaybe<Scalars['String']>;
        alternativeText?: InputMaybe<Scalars['String']>;
        caption?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
        __typename?: 'UsersPermissionsMe';
        id: Scalars['ID'];
        username: Scalars['String'];
        email?: Maybe<Scalars['String']>;
        confirmed?: Maybe<Scalars['Boolean']>;
        blocked?: Maybe<Scalars['Boolean']>;
        role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
        __typename?: 'UsersPermissionsMeRole';
        id: Scalars['ID'];
        name: Scalars['String'];
        description?: Maybe<Scalars['String']>;
        type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
        username: Scalars['String'];
        email: Scalars['String'];
        password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
        identifier: Scalars['String'];
        password: Scalars['String'];
        provider?: Scalars['String'];
};

export type UsersPermissionsPasswordPayload = {
        __typename?: 'UsersPermissionsPasswordPayload';
        ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginPayload = {
        __typename?: 'UsersPermissionsLoginPayload';
        jwt?: Maybe<Scalars['String']>;
        user: UsersPermissionsMe;
};

export type UsersPermissionsCreateRolePayload = {
        __typename?: 'UsersPermissionsCreateRolePayload';
        ok: Scalars['Boolean'];
};

export type UsersPermissionsUpdateRolePayload = {
        __typename?: 'UsersPermissionsUpdateRolePayload';
        ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
        __typename?: 'UsersPermissionsDeleteRolePayload';
        ok: Scalars['Boolean'];
};

export type PaginationArg = {
        page?: InputMaybe<Scalars['Int']>;
        pageSize?: InputMaybe<Scalars['Int']>;
        start?: InputMaybe<Scalars['Int']>;
        limit?: InputMaybe<Scalars['Int']>;
};

export type Query = {
        __typename?: 'Query';
        article?: Maybe<ArticleEntityResponse>;
        articles?: Maybe<ArticleEntityResponseCollection>;
        category?: Maybe<CategoryEntityResponse>;
        categories?: Maybe<CategoryEntityResponseCollection>;
        uploadFile?: Maybe<UploadFileEntityResponse>;
        uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
        i18NLocale?: Maybe<I18NLocaleEntityResponse>;
        i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
        usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
        usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
        usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
        usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
        me?: Maybe<UsersPermissionsMe>;
};


export type QueryArticleArgs = {
        id?: InputMaybe<Scalars['ID']>;
};


export type QueryArticlesArgs = {
        filters?: InputMaybe<ArticleFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
        publicationState?: InputMaybe<PublicationState>;
};


export type QueryCategoryArgs = {
        id?: InputMaybe<Scalars['ID']>;
};


export type QueryCategoriesArgs = {
        filters?: InputMaybe<CategoryFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
        id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
        filters?: InputMaybe<UploadFileFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
        id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
        filters?: InputMaybe<I18NLocaleFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
        id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
        filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
        id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
        filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
        pagination?: InputMaybe<PaginationArg>;
        sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
        __typename?: 'Mutation';
        createArticle?: Maybe<ArticleEntityResponse>;
        updateArticle?: Maybe<ArticleEntityResponse>;
        deleteArticle?: Maybe<ArticleEntityResponse>;
        createCategory?: Maybe<CategoryEntityResponse>;
        updateCategory?: Maybe<CategoryEntityResponse>;
        deleteCategory?: Maybe<CategoryEntityResponse>;
        createUploadFile?: Maybe<UploadFileEntityResponse>;
        updateUploadFile?: Maybe<UploadFileEntityResponse>;
        deleteUploadFile?: Maybe<UploadFileEntityResponse>;
        upload: UploadFileEntityResponse;
        multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
        updateFileInfo: UploadFileEntityResponse;
        removeFile?: Maybe<UploadFileEntityResponse>;
        createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
        updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
        deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
        createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
        updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
        deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
        login: UsersPermissionsLoginPayload;
        register: UsersPermissionsLoginPayload;
        forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
        resetPassword?: Maybe<UsersPermissionsLoginPayload>;
        emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateArticleArgs = {
        data: ArticleInput;
};


export type MutationUpdateArticleArgs = {
        id: Scalars['ID'];
        data: ArticleInput;
};


export type MutationDeleteArticleArgs = {
        id: Scalars['ID'];
};


export type MutationCreateCategoryArgs = {
        data: CategoryInput;
};


export type MutationUpdateCategoryArgs = {
        id: Scalars['ID'];
        data: CategoryInput;
};


export type MutationDeleteCategoryArgs = {
        id: Scalars['ID'];
};


export type MutationCreateUploadFileArgs = {
        data: UploadFileInput;
};


export type MutationUpdateUploadFileArgs = {
        id: Scalars['ID'];
        data: UploadFileInput;
};


export type MutationDeleteUploadFileArgs = {
        id: Scalars['ID'];
};


export type MutationUploadArgs = {
        refId?: InputMaybe<Scalars['ID']>;
        ref?: InputMaybe<Scalars['String']>;
        field?: InputMaybe<Scalars['String']>;
        info?: InputMaybe<FileInfoInput>;
        file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
        refId?: InputMaybe<Scalars['ID']>;
        ref?: InputMaybe<Scalars['String']>;
        field?: InputMaybe<Scalars['String']>;
        files: Array<InputMaybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
        id: Scalars['ID'];
        info?: InputMaybe<FileInfoInput>;
};


export type MutationRemoveFileArgs = {
        id: Scalars['ID'];
};


export type MutationCreateUsersPermissionsRoleArgs = {
        data: UsersPermissionsRoleInput;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
        id: Scalars['ID'];
        data: UsersPermissionsRoleInput;
};


export type MutationDeleteUsersPermissionsRoleArgs = {
        id: Scalars['ID'];
};


export type MutationCreateUsersPermissionsUserArgs = {
        data: UsersPermissionsUserInput;
};


export type MutationUpdateUsersPermissionsUserArgs = {
        id: Scalars['ID'];
        data: UsersPermissionsUserInput;
};


export type MutationDeleteUsersPermissionsUserArgs = {
        id: Scalars['ID'];
};


export type MutationLoginArgs = {
        input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
        input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
        email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
        password: Scalars['String'];
        passwordConfirmation: Scalars['String'];
        code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
        confirmation: Scalars['String'];
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

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
        JSON: ResolverTypeWrapper<Scalars['JSON']>;
        DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
        Upload: ResolverTypeWrapper<Scalars['Upload']>;
        Pagination: ResolverTypeWrapper<Pagination>;
        Int: ResolverTypeWrapper<Scalars['Int']>;
        ResponseCollectionMeta: ResolverTypeWrapper<ResponseCollectionMeta>;
        PublicationState: PublicationState;
        IDFilterInput: IdFilterInput;
        ID: ResolverTypeWrapper<Scalars['ID']>;
        Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
        BooleanFilterInput: BooleanFilterInput;
        StringFilterInput: StringFilterInput;
        String: ResolverTypeWrapper<Scalars['String']>;
        IntFilterInput: IntFilterInput;
        FloatFilterInput: FloatFilterInput;
        Float: ResolverTypeWrapper<Scalars['Float']>;
        DateTimeFilterInput: DateTimeFilterInput;
        JSONFilterInput: JsonFilterInput;
        ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK: Enum_Componentsharedmetasocial_Socialnetwork;
        ComponentSharedMetaSocialFiltersInput: ComponentSharedMetaSocialFiltersInput;
        ComponentSharedMetaSocial: ResolverTypeWrapper<ComponentSharedMetaSocial>;
        ComponentSharedSeo: ResolverTypeWrapper<ComponentSharedSeo>;
        ArticleFiltersInput: ArticleFiltersInput;
        ArticleInput: ArticleInput;
        Article: ResolverTypeWrapper<Article>;
        ArticleEntity: ResolverTypeWrapper<ArticleEntity>;
        ArticleEntityResponse: ResolverTypeWrapper<ArticleEntityResponse>;
        ArticleEntityResponseCollection: ResolverTypeWrapper<ArticleEntityResponseCollection>;
        ArticleRelationResponseCollection: ResolverTypeWrapper<ArticleRelationResponseCollection>;
        CategoryFiltersInput: CategoryFiltersInput;
        CategoryInput: CategoryInput;
        Category: ResolverTypeWrapper<Category>;
        CategoryEntity: ResolverTypeWrapper<CategoryEntity>;
        CategoryEntityResponse: ResolverTypeWrapper<CategoryEntityResponse>;
        CategoryEntityResponseCollection: ResolverTypeWrapper<CategoryEntityResponseCollection>;
        UploadFileFiltersInput: UploadFileFiltersInput;
        UploadFileInput: UploadFileInput;
        UploadFile: ResolverTypeWrapper<Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>> }>;
        UploadFileEntity: ResolverTypeWrapper<UploadFileEntity>;
        UploadFileEntityResponse: ResolverTypeWrapper<UploadFileEntityResponse>;
        UploadFileEntityResponseCollection: ResolverTypeWrapper<UploadFileEntityResponseCollection>;
        UploadFileRelationResponseCollection: ResolverTypeWrapper<UploadFileRelationResponseCollection>;
        I18NLocaleFiltersInput: I18NLocaleFiltersInput;
        I18NLocale: ResolverTypeWrapper<I18NLocale>;
        I18NLocaleEntity: ResolverTypeWrapper<I18NLocaleEntity>;
        I18NLocaleEntityResponse: ResolverTypeWrapper<I18NLocaleEntityResponse>;
        I18NLocaleEntityResponseCollection: ResolverTypeWrapper<I18NLocaleEntityResponseCollection>;
        UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
        UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
        UsersPermissionsPermissionEntity: ResolverTypeWrapper<UsersPermissionsPermissionEntity>;
        UsersPermissionsPermissionRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsPermissionRelationResponseCollection>;
        UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
        UsersPermissionsRoleInput: UsersPermissionsRoleInput;
        UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
        UsersPermissionsRoleEntity: ResolverTypeWrapper<UsersPermissionsRoleEntity>;
        UsersPermissionsRoleEntityResponse: ResolverTypeWrapper<UsersPermissionsRoleEntityResponse>;
        UsersPermissionsRoleEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsRoleEntityResponseCollection>;
        UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
        UsersPermissionsUserInput: UsersPermissionsUserInput;
        UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
        UsersPermissionsUserEntity: ResolverTypeWrapper<UsersPermissionsUserEntity>;
        UsersPermissionsUserEntityResponse: ResolverTypeWrapper<UsersPermissionsUserEntityResponse>;
        UsersPermissionsUserEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsUserEntityResponseCollection>;
        UsersPermissionsUserRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsUserRelationResponseCollection>;
        GenericMorph: ResolversTypes['ComponentSharedMetaSocial'] | ResolversTypes['ComponentSharedSeo'] | ResolversTypes['Article'] | ResolversTypes['Category'] | ResolversTypes['UploadFile'] | ResolversTypes['I18NLocale'] | ResolversTypes['UsersPermissionsPermission'] | ResolversTypes['UsersPermissionsRole'] | ResolversTypes['UsersPermissionsUser'];
        FileInfoInput: FileInfoInput;
        UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
        UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
        UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
        UsersPermissionsLoginInput: UsersPermissionsLoginInput;
        UsersPermissionsPasswordPayload: ResolverTypeWrapper<UsersPermissionsPasswordPayload>;
        UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
        UsersPermissionsCreateRolePayload: ResolverTypeWrapper<UsersPermissionsCreateRolePayload>;
        UsersPermissionsUpdateRolePayload: ResolverTypeWrapper<UsersPermissionsUpdateRolePayload>;
        UsersPermissionsDeleteRolePayload: ResolverTypeWrapper<UsersPermissionsDeleteRolePayload>;
        PaginationArg: PaginationArg;
        Query: ResolverTypeWrapper<{}>;
        Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
        JSON: Scalars['JSON'];
        DateTime: Scalars['DateTime'];
        Upload: Scalars['Upload'];
        Pagination: Pagination;
        Int: Scalars['Int'];
        ResponseCollectionMeta: ResponseCollectionMeta;
        IDFilterInput: IdFilterInput;
        ID: Scalars['ID'];
        Boolean: Scalars['Boolean'];
        BooleanFilterInput: BooleanFilterInput;
        StringFilterInput: StringFilterInput;
        String: Scalars['String'];
        IntFilterInput: IntFilterInput;
        FloatFilterInput: FloatFilterInput;
        Float: Scalars['Float'];
        DateTimeFilterInput: DateTimeFilterInput;
        JSONFilterInput: JsonFilterInput;
        ComponentSharedMetaSocialFiltersInput: ComponentSharedMetaSocialFiltersInput;
        ComponentSharedMetaSocial: ComponentSharedMetaSocial;
        ComponentSharedSeo: ComponentSharedSeo;
        ArticleFiltersInput: ArticleFiltersInput;
        ArticleInput: ArticleInput;
        Article: Article;
        ArticleEntity: ArticleEntity;
        ArticleEntityResponse: ArticleEntityResponse;
        ArticleEntityResponseCollection: ArticleEntityResponseCollection;
        ArticleRelationResponseCollection: ArticleRelationResponseCollection;
        CategoryFiltersInput: CategoryFiltersInput;
        CategoryInput: CategoryInput;
        Category: Category;
        CategoryEntity: CategoryEntity;
        CategoryEntityResponse: CategoryEntityResponse;
        CategoryEntityResponseCollection: CategoryEntityResponseCollection;
        UploadFileFiltersInput: UploadFileFiltersInput;
        UploadFileInput: UploadFileInput;
        UploadFile: Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversParentTypes['GenericMorph']>>> };
        UploadFileEntity: UploadFileEntity;
        UploadFileEntityResponse: UploadFileEntityResponse;
        UploadFileEntityResponseCollection: UploadFileEntityResponseCollection;
        UploadFileRelationResponseCollection: UploadFileRelationResponseCollection;
        I18NLocaleFiltersInput: I18NLocaleFiltersInput;
        I18NLocale: I18NLocale;
        I18NLocaleEntity: I18NLocaleEntity;
        I18NLocaleEntityResponse: I18NLocaleEntityResponse;
        I18NLocaleEntityResponseCollection: I18NLocaleEntityResponseCollection;
        UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
        UsersPermissionsPermission: UsersPermissionsPermission;
        UsersPermissionsPermissionEntity: UsersPermissionsPermissionEntity;
        UsersPermissionsPermissionRelationResponseCollection: UsersPermissionsPermissionRelationResponseCollection;
        UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
        UsersPermissionsRoleInput: UsersPermissionsRoleInput;
        UsersPermissionsRole: UsersPermissionsRole;
        UsersPermissionsRoleEntity: UsersPermissionsRoleEntity;
        UsersPermissionsRoleEntityResponse: UsersPermissionsRoleEntityResponse;
        UsersPermissionsRoleEntityResponseCollection: UsersPermissionsRoleEntityResponseCollection;
        UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
        UsersPermissionsUserInput: UsersPermissionsUserInput;
        UsersPermissionsUser: UsersPermissionsUser;
        UsersPermissionsUserEntity: UsersPermissionsUserEntity;
        UsersPermissionsUserEntityResponse: UsersPermissionsUserEntityResponse;
        UsersPermissionsUserEntityResponseCollection: UsersPermissionsUserEntityResponseCollection;
        UsersPermissionsUserRelationResponseCollection: UsersPermissionsUserRelationResponseCollection;
        GenericMorph: ResolversParentTypes['ComponentSharedMetaSocial'] | ResolversParentTypes['ComponentSharedSeo'] | ResolversParentTypes['Article'] | ResolversParentTypes['Category'] | ResolversParentTypes['UploadFile'] | ResolversParentTypes['I18NLocale'] | ResolversParentTypes['UsersPermissionsPermission'] | ResolversParentTypes['UsersPermissionsRole'] | ResolversParentTypes['UsersPermissionsUser'];
        FileInfoInput: FileInfoInput;
        UsersPermissionsMe: UsersPermissionsMe;
        UsersPermissionsMeRole: UsersPermissionsMeRole;
        UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
        UsersPermissionsLoginInput: UsersPermissionsLoginInput;
        UsersPermissionsPasswordPayload: UsersPermissionsPasswordPayload;
        UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
        UsersPermissionsCreateRolePayload: UsersPermissionsCreateRolePayload;
        UsersPermissionsUpdateRolePayload: UsersPermissionsUpdateRolePayload;
        UsersPermissionsDeleteRolePayload: UsersPermissionsDeleteRolePayload;
        PaginationArg: PaginationArg;
        Query: {};
        Mutation: {};
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
        name: 'JSON';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
        name: 'DateTime';
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
        name: 'Upload';
}

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
        total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
        page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
        pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
        pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseCollectionMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseCollectionMeta'] = ResolversParentTypes['ResponseCollectionMeta']> = {
        pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedMetaSocialResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSharedMetaSocial'] = ResolversParentTypes['ComponentSharedMetaSocial']> = {
        id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
        socialNetwork?: Resolver<ResolversTypes['ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK'], ParentType, ContextType>;
        title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        image?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedSeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSharedSeo'] = ResolversParentTypes['ComponentSharedSeo']> = {
        id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
        metaTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        metaDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        metaImage?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType>;
        metaSocial?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentSharedMetaSocial']>>>, ParentType, ContextType, RequireFields<ComponentSharedSeoMetaSocialArgs, 'pagination' | 'sort'>>;
        keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        metaRobots?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        structuredData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
        metaViewport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        canonicalURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
        title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        thumbnail?: Resolver<Maybe<ResolversTypes['UploadFileRelationResponseCollection']>, ParentType, ContextType, RequireFields<ArticleThumbnailArgs, 'pagination' | 'sort'>>;
        user?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponse']>, ParentType, ContextType>;
        category?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType>;
        createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleEntity'] = ResolversParentTypes['ArticleEntity']> = {
        id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
        attributes?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
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
        name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        articles?: Resolver<Maybe<ResolversTypes['ArticleRelationResponseCollection']>, ParentType, ContextType, RequireFields<CategoryArticlesArgs, 'pagination' | 'sort' | 'publicationState'>>;
        createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEntity'] = ResolversParentTypes['CategoryEntity']> = {
        id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
        attributes?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
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

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile']> = {
        name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        alternativeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
        height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
        formats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
        hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        mime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
        url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        provider_metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
        related?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>>, ParentType, ContextType>;
        createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntity'] = ResolversParentTypes['UploadFileEntity']> = {
        id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
        attributes?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
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

export type I18NLocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocale'] = ResolversParentTypes['I18NLocale']> = {
        name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntity'] = ResolversParentTypes['I18NLocaleEntity']> = {
        id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
        attributes?: Resolver<Maybe<ResolversTypes['I18NLocale']>, ParentType, ContextType>;
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

export type UsersPermissionsPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermission'] = ResolversParentTypes['UsersPermissionsPermission']> = {
        action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
        createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionEntity'] = ResolversParentTypes['UsersPermissionsPermissionEntity']> = {
        id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
        attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermission']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection']> = {
        data?: Resolver<Array<ResolversTypes['UsersPermissionsPermissionEntity']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRole'] = ResolversParentTypes['UsersPermissionsRole']> = {
        name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        permissions?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermissionRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissionsArgs, 'pagination' | 'sort'>>;
        users?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsersArgs, 'pagination' | 'sort'>>;
        createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntity'] = ResolversParentTypes['UsersPermissionsRoleEntity']> = {
        id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
        attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
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

export type UsersPermissionsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUser'] = ResolversParentTypes['UsersPermissionsUser']> = {
        username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
        blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
        role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
        articles?: Resolver<Maybe<ResolversTypes['ArticleRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsUserArticlesArgs, 'pagination' | 'sort' | 'publicationState'>>;
        createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntity'] = ResolversParentTypes['UsersPermissionsUserEntity']> = {
        id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
        attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
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

export type GenericMorphResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericMorph'] = ResolversParentTypes['GenericMorph']> = {
        __resolveType: TypeResolveFn<'ComponentSharedMetaSocial' | 'ComponentSharedSeo' | 'Article' | 'Category' | 'UploadFile' | 'I18NLocale' | 'UsersPermissionsPermission' | 'UsersPermissionsRole' | 'UsersPermissionsUser', ParentType, ContextType>;
};

export type UsersPermissionsMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMe'] = ResolversParentTypes['UsersPermissionsMe']> = {
        id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
        username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
        blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
        role?: Resolver<Maybe<ResolversTypes['UsersPermissionsMeRole']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMeRole'] = ResolversParentTypes['UsersPermissionsMeRole']> = {
        id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
        name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPasswordPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPasswordPayload'] = ResolversParentTypes['UsersPermissionsPasswordPayload']> = {
        ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsLoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsLoginPayload'] = ResolversParentTypes['UsersPermissionsLoginPayload']> = {
        jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
        user?: Resolver<ResolversTypes['UsersPermissionsMe'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsCreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsCreateRolePayload'] = ResolversParentTypes['UsersPermissionsCreateRolePayload']> = {
        ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUpdateRolePayload'] = ResolversParentTypes['UsersPermissionsUpdateRolePayload']> = {
        ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsDeleteRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsDeleteRolePayload'] = ResolversParentTypes['UsersPermissionsDeleteRolePayload']> = {
        ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
        article?: Resolver<Maybe<ResolversTypes['ArticleEntityResponse']>, ParentType, ContextType, Partial<QueryArticleArgs>>;
        articles?: Resolver<Maybe<ResolversTypes['ArticleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryArticlesArgs, 'pagination' | 'sort' | 'publicationState'>>;
        category?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, Partial<QueryCategoryArgs>>;
        categories?: Resolver<Maybe<ResolversTypes['CategoryEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'pagination' | 'sort'>>;
        uploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, Partial<QueryUploadFileArgs>>;
        uploadFiles?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFilesArgs, 'pagination' | 'sort'>>;
        i18NLocale?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponse']>, ParentType, ContextType, Partial<QueryI18NLocaleArgs>>;
        i18NLocales?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryI18NLocalesArgs, 'pagination' | 'sort'>>;
        usersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType, Partial<QueryUsersPermissionsRoleArgs>>;
        usersPermissionsRoles?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRolesArgs, 'pagination' | 'sort'>>;
        usersPermissionsUser?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponse']>, ParentType, ContextType, Partial<QueryUsersPermissionsUserArgs>>;
        usersPermissionsUsers?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUsersArgs, 'pagination' | 'sort'>>;
        me?: Resolver<Maybe<ResolversTypes['UsersPermissionsMe']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
        createArticle?: Resolver<Maybe<ResolversTypes['ArticleEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'data'>>;
        updateArticle?: Resolver<Maybe<ResolversTypes['ArticleEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateArticleArgs, 'id' | 'data'>>;
        deleteArticle?: Resolver<Maybe<ResolversTypes['ArticleEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'id'>>;
        createCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'data'>>;
        updateCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'id' | 'data'>>;
        deleteCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
        createUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateUploadFileArgs, 'data'>>;
        updateUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUploadFileArgs, 'id' | 'data'>>;
        deleteUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFileArgs, 'id'>>;
        upload?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUploadArgs, 'file'>>;
        multipleUpload?: Resolver<Array<Maybe<ResolversTypes['UploadFileEntityResponse']>>, ParentType, ContextType, RequireFields<MutationMultipleUploadArgs, 'files'>>;
        updateFileInfo?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateFileInfoArgs, 'id'>>;
        removeFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationRemoveFileArgs, 'id'>>;
        createUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsCreateRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsRoleArgs, 'data'>>;
        updateUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsUpdateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsRoleArgs, 'id' | 'data'>>;
        deleteUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsDeleteRolePayload']>, ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsRoleArgs, 'id'>>;
        createUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsUserArgs, 'data'>>;
        updateUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsUserArgs, 'id' | 'data'>>;
        deleteUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsUserArgs, 'id'>>;
        login?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
        register?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
        forgotPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsPasswordPayload']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
        resetPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'password' | 'passwordConfirmation' | 'code'>>;
        emailConfirmation?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationEmailConfirmationArgs, 'confirmation'>>;
};

export type Resolvers<ContextType = any> = {
        JSON?: GraphQLScalarType;
        DateTime?: GraphQLScalarType;
        Upload?: GraphQLScalarType;
        Pagination?: PaginationResolvers<ContextType>;
        ResponseCollectionMeta?: ResponseCollectionMetaResolvers<ContextType>;
        ComponentSharedMetaSocial?: ComponentSharedMetaSocialResolvers<ContextType>;
        ComponentSharedSeo?: ComponentSharedSeoResolvers<ContextType>;
        Article?: ArticleResolvers<ContextType>;
        ArticleEntity?: ArticleEntityResolvers<ContextType>;
        ArticleEntityResponse?: ArticleEntityResponseResolvers<ContextType>;
        ArticleEntityResponseCollection?: ArticleEntityResponseCollectionResolvers<ContextType>;
        ArticleRelationResponseCollection?: ArticleRelationResponseCollectionResolvers<ContextType>;
        Category?: CategoryResolvers<ContextType>;
        CategoryEntity?: CategoryEntityResolvers<ContextType>;
        CategoryEntityResponse?: CategoryEntityResponseResolvers<ContextType>;
        CategoryEntityResponseCollection?: CategoryEntityResponseCollectionResolvers<ContextType>;
        UploadFile?: UploadFileResolvers<ContextType>;
        UploadFileEntity?: UploadFileEntityResolvers<ContextType>;
        UploadFileEntityResponse?: UploadFileEntityResponseResolvers<ContextType>;
        UploadFileEntityResponseCollection?: UploadFileEntityResponseCollectionResolvers<ContextType>;
        UploadFileRelationResponseCollection?: UploadFileRelationResponseCollectionResolvers<ContextType>;
        I18NLocale?: I18NLocaleResolvers<ContextType>;
        I18NLocaleEntity?: I18NLocaleEntityResolvers<ContextType>;
        I18NLocaleEntityResponse?: I18NLocaleEntityResponseResolvers<ContextType>;
        I18NLocaleEntityResponseCollection?: I18NLocaleEntityResponseCollectionResolvers<ContextType>;
        UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
        UsersPermissionsPermissionEntity?: UsersPermissionsPermissionEntityResolvers<ContextType>;
        UsersPermissionsPermissionRelationResponseCollection?: UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType>;
        UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
        UsersPermissionsRoleEntity?: UsersPermissionsRoleEntityResolvers<ContextType>;
        UsersPermissionsRoleEntityResponse?: UsersPermissionsRoleEntityResponseResolvers<ContextType>;
        UsersPermissionsRoleEntityResponseCollection?: UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType>;
        UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
        UsersPermissionsUserEntity?: UsersPermissionsUserEntityResolvers<ContextType>;
        UsersPermissionsUserEntityResponse?: UsersPermissionsUserEntityResponseResolvers<ContextType>;
        UsersPermissionsUserEntityResponseCollection?: UsersPermissionsUserEntityResponseCollectionResolvers<ContextType>;
        UsersPermissionsUserRelationResponseCollection?: UsersPermissionsUserRelationResponseCollectionResolvers<ContextType>;
        GenericMorph?: GenericMorphResolvers<ContextType>;
        UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
        UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
        UsersPermissionsPasswordPayload?: UsersPermissionsPasswordPayloadResolvers<ContextType>;
        UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
        UsersPermissionsCreateRolePayload?: UsersPermissionsCreateRolePayloadResolvers<ContextType>;
        UsersPermissionsUpdateRolePayload?: UsersPermissionsUpdateRolePayloadResolvers<ContextType>;
        UsersPermissionsDeleteRolePayload?: UsersPermissionsDeleteRolePayloadResolvers<ContextType>;
        Query?: QueryResolvers<ContextType>;
        Mutation?: MutationResolvers<ContextType>;
};


// Generated on 2022-06-19T00:45:23+09:00
// https://www.graphql-code-generator.com/
