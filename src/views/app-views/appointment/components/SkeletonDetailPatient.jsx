import { Card, Flex, Skeleton } from "antd";

export function SkeletonDetailPatient() {
  return (
    <>
      <Card>
        <Flex justify="center">
          <Skeleton.Image active={true} className="rounded-full" />
        </Flex>
        <Flex justify="center" className="mt-2">
          <Skeleton.Input active={true} className="w-30 h-7" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
      </Card>
      <Card className="mt-4">
        <Flex justify="start" className="mt-2">
          <Skeleton.Input active={true} className="h-7 w-56" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="start" className="mt-3">
          <Skeleton.Input active={true} className="h-6 w-14" />
          <Skeleton.Input active={true} className="ms-[5.40rem] h-6 w-14" />
        </Flex>
        <Flex justify="center" className="mt-4">
          <Skeleton.Input active={true} className="h-8 w-56" />
        </Flex>
      </Card>
    </>
  );
}
