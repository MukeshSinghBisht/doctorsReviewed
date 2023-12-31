/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DoctorService } from "../doctor.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DoctorCreateInput } from "./DoctorCreateInput";
import { DoctorWhereInput } from "./DoctorWhereInput";
import { DoctorWhereUniqueInput } from "./DoctorWhereUniqueInput";
import { DoctorFindManyArgs } from "./DoctorFindManyArgs";
import { DoctorUpdateInput } from "./DoctorUpdateInput";
import { Doctor } from "./Doctor";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DoctorControllerBase {
  constructor(
    protected readonly service: DoctorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Doctor })
  @nestAccessControl.UseRoles({
    resource: "Doctor",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: DoctorCreateInput): Promise<Doctor> {
    return await this.service.create({
      data: data,
      select: {
        averageRating: true,
        createdAt: true,
        id: true,
        name: true,
        specialty: true,
        totalRatings: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Doctor] })
  @ApiNestedQuery(DoctorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Doctor",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Doctor[]> {
    const args = plainToClass(DoctorFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        averageRating: true,
        createdAt: true,
        id: true,
        name: true,
        specialty: true,
        totalRatings: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Doctor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Doctor",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: DoctorWhereUniqueInput
  ): Promise<Doctor | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        averageRating: true,
        createdAt: true,
        id: true,
        name: true,
        specialty: true,
        totalRatings: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Doctor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Doctor",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: DoctorWhereUniqueInput,
    @common.Body() data: DoctorUpdateInput
  ): Promise<Doctor | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          averageRating: true,
          createdAt: true,
          id: true,
          name: true,
          specialty: true,
          totalRatings: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Doctor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Doctor",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: DoctorWhereUniqueInput
  ): Promise<Doctor | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          averageRating: true,
          createdAt: true,
          id: true,
          name: true,
          specialty: true,
          totalRatings: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
